// Dữ liệu mẫu cho các ảnh
const images = [
    {
        src: "https://i.ibb.co/yY5BNjX/IMG-20210711-231918.jpg",
        name: "[20250101] YoungPerps – Hidden Rockets – Cole Church, Marco Napoli, Jay Tee",
        downloadLink: "https://dood.work/d/jztgl93lb44q"
    },
	{
        src: "https://i.ibb.co/Q665JV5/IMG-20210805-144133.jpg",
        name: "[20250101] YoungPerps – I Don’t Care About Your Girlfriend – Jesse Zeppelin and Braden Taylor",
        downloadLink: "https://dood.work/d/8zb0q8ahu10q"
    },
	{
        src: "https://i.ibb.co/wzT37mD/5b7c3cfb5800c65e14ba9ce32fc0d14d-1.jpg",
        name: "[20250101] YoungPerps – Might As Well – Cole Church and Marco Napoli",
        downloadLink: "https://dood.work/d/6y1bpho3vd1i"
    },
	{
        src: "https://i.ibb.co/dbFYBLg/IMG-20210830-182809.jpg",
        name: "[20250101] YoungPerps – The Comic Book Thief – Cole Church and Mark Something",
        downloadLink: "https://dood.work/d/1oz8idgz01v0"
    },
	{
        src: "https://i.ibb.co/7WyzVPg/Young-Perps-Fucking-My-Way-Through-My-First-Da-Jack-Valor-Brody-Kaymany.jpg",
        name: "[20250101] YoungPerps – Fucking My Way Through My First Da – Jack Valor & Brody Kaymany",
        downloadLink: "https://dood.work/d/l47kphz3g21n"
    },
	{
        src: "https://i.ibb.co/Xkgh8rv/Young-Perps-The-Bejeweled-Dick-Colt-Spence-Phoenix-Leo.jpg",
        name: "[20250101] YoungPerps – The Bejeweled Dick – Colt Spence & Phoenix Leo",
        downloadLink: "https://dood.work/d/ogbndmasidy2"
    },
	{
        src: "https://i.ibb.co/h71rNhX/Young-Perps-Asses-on-the-Line-Xtian-Mingle-Colt-Spence-Phoenix-Leo-Victor-Pleases.jpg",
        name: "[20250101] YoungPerps – Asses on the Line – Xtian Mingle, Colt Spence, Phoenix Leo & Victor Pleases",
        downloadLink: "https://dood.work/d/m393qs0k7or4"
    },
	{
        src: "https://i.ibb.co/98NNQFx/Young-Perps-The-Cruising-Twink-Jack-Valor-Brody-Kayman.jpg",
        name: "[20250101] YoungPerps – The Cruising Twink – Jack Valor & Brody Kayman",
        downloadLink: "https://dood.work/d/y5vooh98zaks"
    },
	{
        src: "https://i.ibb.co/W5xHxk0/Young-Perps-Hung-Officer-Brody-Kayman-Plows-Sassy-Perp-Kyle-Michaels.jpg",
        name: "[20250101] YoungPerps – Hung Officer Brody Kayman Plows Sassy Perp Kyle Michaels",
        downloadLink: "https://dood.work/d/dwh7p3zrmq67"
    },
	{
        src: "https://i.ibb.co/9bK2z8T/Young-Perps-Harrison-Is-Caught-Having-Sex-in-a-Restroom-and-Plowed-by-the-Officer-Harrison-Todd-Greg.jpg",
        name: "[20250101] YoungPerps – Harrison Is Caught Having Sex in a Restroom and Plowed by the Officer – Harrison Todd & Greg Dixxon",
        downloadLink: "https://dood.work/d/466wqbwhqgi3"
    },
	{
        src: "https://i.ibb.co/CPcxwPm/Young-Perps-Role-Reversal-Bruce-Jones-Vincent-OReilly.jpg",
        name: "[20250101] YoungPerps – Role Reversal – Bruce Jones & Vincent O’Reilly",
        downloadLink: "https://dood.work/d/xn9sw2i57ipr"
    },
	{
        src: "https://i.ibb.co/0ZkszrK/Young-Perps-Hardened-Criminal-Apollo-Fates-Magic-Mike-Hung.jpg",
        name: "[20250101] YoungPerps – Hardened Criminal – Apollo Fates & Magic Mike Hung",
        downloadLink: "https://dood.work/d/t1kefhpy7ljb"
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
