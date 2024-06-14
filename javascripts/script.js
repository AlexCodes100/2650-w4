document.addEventListener('DOMContentLoaded', (event) => {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const noteId = button.getAttribute('data-id');
            fetch(`/notes/${noteId}`, { method: 'DELETE' })
                .then((response) => {
                    if (response.ok) {
                        location.reload();
                    } else {
                        console.error('Delete failed');
                    }
                })
                .catch((error) => console.error('Error:', error));
        });
    });

    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const noteId = button.getAttribute('data-id');
            
        });
    });
});