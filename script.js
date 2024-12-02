// Dữ liệu mẫu cho các ảnh
const images = [
    {
        src: "https://fxggxt.com/wp-content/uploads/2024/12/HotGuysFuck-The-Explicit-Intimacy-of-Mike-Beaumonte-Lindsay-Lee.jpg",
        name: "[20241202] HotGuysFuck – The Explicit Intimacy of Mike Beaumonte & Lindsay Lee!",
        downloadLink: "https://dood.li/d/j3dn4ii6uhhu"
    },
	{
        src: "https://fxggxt.com/wp-content/uploads/2024/11/HotGuysFuck-Super-Tall-Kolby-Gigante-Dominates-Little-Spinner-Thalia-Rhea.jpg",
        name: "[20241202] HotGuysFuck – Super Tall Kolby Gigante Dominates Little Spinner Thalia Rhea!",
        downloadLink: "https://dood.li/d/wzm8mony56cj"
    },
	{
        src: "https://fxggxt.com/wp-content/uploads/2024/11/HotGuysFuck-Endless-Throat-and-a-Rock-Hard-Cock-Chris-Stevens-Fuck-Sarah-Lace.jpg",
        name: "[20241202] HotGuysFuck – Endless Throat and a Rock Hard Cock! Chris Stevens Fuck Sarah Lace!",
        downloadLink: "https://dood.li/d/3uf7w349aaqj"
    },
	{
        src: "https://fxggxt.com/wp-content/uploads/2024/11/HotGuysFuck-Best-Friends-Run-Train-On-Slutty-Blonde-BTS.jpg",
        name: "[20241202] HotGuysFuck – Best Friends Run Train On Slutty Blonde BTS",
        downloadLink: "https://dood.li/d/ci3lil6km198"
    },
	{
        src: "https://fxggxt.com/wp-content/uploads/2024/11/HotGuysFuck-Un-Cut-18-Year-Old-Latin-Hottie-Jay-Raw-Meets-Industry-Pro-Blonde-Bombshell-in-Scorching-First-Guy-Girl-Scene.jpg",
        name: "[20241202] HotGuysFuck – Un-Cut 18-Year-Old Latin Hottie Jay Raw Meets Industry Pro Blonde Bombshell in Scorching First Guy-Girl Scene!",
        downloadLink: "https://dood.li/d/8as3lurey4dg"
    },
	{
        src: "https://fxggxt.com/wp-content/uploads/2024/11/HotGuysFuck-Mike-Iron-Finally-Gets-His-Flowers-with-Sweet-Sophia.jpg",
        name: "[20241202] HotGuysFuck – Mike Iron Finally Gets His Flowers with Sweet Sophia!",
        downloadLink: "https://dood.li/d/v0oekhhwznap"
    },
	{
        src: "https://fxggxt.com/wp-content/uploads/2024/11/HotGuysFuck-Live-Cam-Love-Birds-Trey-Beacher-Allison-Lox-Have-Been-Practicing-All-Week-For-This.jpg",
        name: "[20241202] HotGuysFuck – Live-Cam Love Birds Trey Beacher & Allison Lox Have Been Practicing All Week For This!",
        downloadLink: "https://dood.li/d/1mofpt6n0bwq"
    }
];

// Sắp xếp danh sách từ Z đến A dựa trên chuỗi tên đầy đủ (bao gồm cả ngày tháng)
images.sort((a, b) => b.name.localeCompare(a.name));

// Hàm hiển thị danh sách ảnh
function displayImages(filteredImages) {
    const imageList = document.getElementById('image-list');
    imageList.innerHTML = ''; // Xóa nội dung cũ

    filteredImages.forEach(image => {
        const listItem = document.createElement('li');

        // Phần chứa ảnh
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.name;
        imgElement.style.marginRight = '20px';

        // Phần chứa tên và nút download
        const textContainer = document.createElement('div');

        const titleElement = document.createElement('h3');
        const nameOnly = image.name.match(/\] (.+)/)[1]; // Hiển thị chỉ phần tên sau dấu ]
        titleElement.textContent = nameOnly;

        const buttonContainer = document.createElement('div');
        buttonContainer.style.marginTop = '50px';

        const downloadButton = document.createElement('a');
        downloadButton.href = image.downloadLink;
        downloadButton.textContent = 'Download';
        downloadButton.className = 'button';
        downloadButton.target = '_blank'; // Mở liên kết trong tab mới

        buttonContainer.appendChild(downloadButton);

        textContainer.appendChild(titleElement);
        textContainer.appendChild(buttonContainer);

        listItem.appendChild(imgElement);
        listItem.appendChild(textContainer);

        imageList.appendChild(listItem);
    });
}

// Hiển thị danh sách ảnh ban đầu
displayImages(images);

// Tìm kiếm ảnh
document.getElementById('search-input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();

    // Lọc danh sách ảnh dựa trên từ khóa tìm kiếm
    const filteredImages = images.filter(image => {
        const nameOnly = image.name.match(/\] (.+)/)[1].toLowerCase();
        return nameOnly.includes(searchTerm);
    });

    // Hiển thị danh sách ảnh đã lọc
    displayImages(filteredImages);
});
