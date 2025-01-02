// Dữ liệu mẫu cho các ảnh
const images = [
    {
        src: "https://fxggxt.com/wp-content/uploads/2021/07/IMG_20210711_231918.jpg",
        name: "[20250101] YoungPerps – Hidden Rockets – Cole Church, Marco Napoli, Jay Tee",
        downloadLink: "https://dood.work/d/jztgl93lb44q"
    },
	{
        src: "https://fxggxt.com/wp-content/uploads/2021/08/IMG_20210805_144133.jpg",
        name: "[20250101] YoungPerps – I Don’t Care About Your Girlfriend – Jesse Zeppelin and Braden Taylor",
        downloadLink: "https://dood.work/d/8zb0q8ahu10q"
    },
	{
        src: "https://fxggxt.com/wp-content/uploads/2021/08/5b7c3cfb5800c65e14ba9ce32fc0d14d_1.jpg",
        name: "[20250101] YoungPerps – Might As Well – Cole Church and Marco Napoli",
        downloadLink: "https://dood.work/d/6y1bpho3vd1i"
    },
	{
        src: "https://fxggxt.com/wp-content/uploads/2021/08/IMG_20210830_182809.jpg",
        name: "[20250101] YoungPerps – The Comic Book Thief – Cole Church and Mark Something",
        downloadLink: "https://dood.work/d/1oz8idgz01v0"
    },
	{
        src: "https://fxggxt.com/wp-content/uploads/2024/12/YoungPerps-Fucking-My-Way-Through-My-First-Da-Jack-Valor-Brody-Kaymany.jpg",
        name: "[20250101] YoungPerps – Fucking My Way Through My First Da – Jack Valor & Brody Kaymany",
        downloadLink: "https://dood.work/d/l47kphz3g21n"
    },
	{
        src: "https://fxggxt.com/wp-content/uploads/2024/12/YoungPerps-The-Bejeweled-Dick-Colt-Spence-Phoenix-Leo.jpg",
        name: "[20250101] YoungPerps – The Bejeweled Dick – Colt Spence & Phoenix Leo",
        downloadLink: "https://dood.work/d/ogbndmasidy2"
    },
	{
        src: "https://fxggxt.com/wp-content/uploads/2024/11/YoungPerps-Asses-on-the-Line-Xtian-Mingle-Colt-Spence-Phoenix-Leo-Victor-Pleases.jpg",
        name: "[20250101] YoungPerps – Asses on the Line – Xtian Mingle, Colt Spence, Phoenix Leo & Victor Pleases",
        downloadLink: "https://dood.work/d/m393qs0k7or4"
    },
	{
        src: "https://fxggxt.com/wp-content/uploads/2024/10/YoungPerps-The-Cruising-Twink-Jack-Valor-Brody-Kayman.jpg",
        name: "[20250101] YoungPerps – The Cruising Twink – Jack Valor & Brody Kayman",
        downloadLink: "https://dood.work/d/y5vooh98zaks"
    },
	{
        src: "https://fxggxt.com/wp-content/uploads/2024/09/YoungPerps-Hung-Officer-Brody-Kayman-Plows-Sassy-Perp-Kyle-Michaels.jpg",
        name: "[20250101] YoungPerps – Hung Officer Brody Kayman Plows Sassy Perp Kyle Michaels",
        downloadLink: "https://dood.work/d/dwh7p3zrmq67"
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
