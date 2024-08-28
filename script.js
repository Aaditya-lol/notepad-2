const textArea = document.getElementById('textArea');
const saveButton = document.getElementById('saveButton');

saveButton.addEventListener('click', () => {
    const content = textArea.value;
    saveToFile(content);
});

function saveToFile(content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'notepad.txt';
    a.click();
}