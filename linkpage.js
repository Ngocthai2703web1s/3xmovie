<script>
    const defaultLink = "https://ngocthai2703web1s.github.io/3xmovie/";

    document.addEventListener("keydown", (event) => {
        if (
            (event.ctrlKey && (event.key === "c" || event.key === "u" || event.key === "i" || event.key === "p"))
            ) {
            event.preventDefault();
            window.location.href = defaultLink;
            }
        });

    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        window.location.href = defaultLink;
        });
</script>