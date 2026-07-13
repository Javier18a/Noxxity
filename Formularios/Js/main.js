(function () {

    const form = document.getElementById('nxForm');
    const modal = document.getElementById('nxModal');
    const closeBtn = document.getElementById('nxClose');

    function showModal() {
        modal.classList.add("show");
    }

    function hideModal() {
        modal.classList.remove("show");
    }

    form.addEventListener('submit', function (e) {

        e.preventDefault();

        const url = form.action;
        const data = new FormData(form);

        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                showModal();
                form.reset();
            })
            .catch(error => {
                showModal();
            });

    });

    closeBtn.addEventListener('click', hideModal);

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            hideModal();
        }
    });

})();