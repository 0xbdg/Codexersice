<script lang="ts" setup>
import { ref, shallowRef } from 'vue'
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'

const code = ref('// Tulis kode...')

const editor = shallowRef()
const handleMount = editorInstance => (editor.value = editorInstance)

const editorOptions = {
    automaticLayout: true,
    fontSize: 14,
    minimap: { enabled: false },
    wordWrap: 'on',
    formatOnPaste: true,
}
</script>

<template>
    <p>ini editor</p>
    <vue-monaco-editor v-model:value="code" theme="vs-dark" :options="editorOptions" @mount="handleMount"
        language="java" />
</template>
