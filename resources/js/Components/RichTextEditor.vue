<template>
    <div class="editor-container" v-if="editor">
        <!-- Barra de ferramentas -->
        <div class="toolbar">
            <button @click="editor.chain().focus().toggleBold().run()" :class="{ active: editor.isActive('bold') }">
                <strong>B</strong>
            </button>
            <button @click="editor.chain().focus().toggleItalic().run()" :class="{ active: editor.isActive('italic') }">
                <em>I</em>
            </button>
            <button @click="editor.chain().focus().toggleUnderline().run()" :class="{ active: editor.isActive('underline') }">
                <u>U</u>
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ active: editor.isActive('heading', { level: 1 }) }">
                H1
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ active: editor.isActive('heading', { level: 2 }) }">
                H2
            </button>
            <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ active: editor.isActive('bulletList') }">
            🔘
            </button>
            <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ active: editor.isActive('orderedList') }">
                🔢
            </button>
            <button @click="editor.chain().focus().setTextAlign('left').run()" :class="{ active: editor.isActive('paragraph', { textAlign: 'left' }) }">
                ⬅ Alinhar Esquerda
            </button>
            <button @click="editor.chain().focus().setTextAlign('center').run()" :class="{ active: editor.isActive('paragraph', { textAlign: 'center' }) }">
                ⏺ Centralizar
            </button>
            <button @click="editor.chain().focus().setTextAlign('right').run()" :class="{ active: editor.isActive('paragraph', { textAlign: 'right' }) }">
                ➡ Alinhar Direita
            </button>
        </div>

        <!-- Editor -->
        <editor-content :editor="editor" class="editor" />
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { Editor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Heading from '@tiptap/extension-heading';
import TextAlign from '@tiptap/extension-text-align';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import TextStyle from '@tiptap/extension-text-style';
import Paragraph from '@tiptap/extension-paragraph';
import ListItem from '@tiptap/extension-list-item';

// Props para receber conteúdo do editor
const props = defineProps({
    modelValue: String
});
const emit = defineEmits(["update:modelValue"]);

const editor = ref(null);

onMounted(() => {
    editor.value = new Editor({
        extensions: [
            StarterKit,
            Underline,
            Heading.configure({ levels: [1, 2] }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
                alignments: ['left', 'center', 'right']
            }),
            BulletList,
            OrderedList,
            ListItem, // Adiciona suporte a itens de lista
            TextStyle,
            Paragraph
        ],
        content: props.modelValue || '',
        onUpdate: () => {
            emit("update:modelValue", editor.value.getHTML());
        },
    });
});

onBeforeUnmount(() => {
    if (editor.value) {
        editor.value.destroy();
        editor.value = null;
    }
});

// Atualizar editor quando o modelValue mudar
watch(() => props.modelValue, (newValue) => {
    if (editor.value && newValue !== editor.value.getHTML()) {
        editor.value.commands.setContent(newValue, false); // O `false` evita um loop infinito
    }
});
</script>

<style scoped>
.editor-container {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    min-height: 150px;
    background: white;
}

/* Barra de ferramentas */
.toolbar {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
}

.toolbar button {
    background: #f3f4f6;
    border: 1px solid #ccc;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.2s;
}

.toolbar button:hover {
    background: #e5e7eb;
}

.toolbar button.active {
    background: #2563eb;
    color: white;
}
</style>
