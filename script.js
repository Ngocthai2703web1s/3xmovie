// Dữ liệu mẫu cho các ảnh
const images = [
    {
        src: "https://i.ibb.co/n6Y4ZMB/Next-Door-Studios-Roman-Todd-Michael-Del-Ray.jpg",
        name: "[20240817] NextDoor Studios - Roman Todd & Michael Del Ray",
        downloadLink: "https://10gb.vn/12kp56660yxw.html"
    },
	{
        src: "https://i.ibb.co/xSvm15n/Cocky-Boys-Aiden-Ward-Oliver-Carter.jpg",
        name: "[20240817] Cocky Boys - Aiden Ward & Oliver Carter",
        downloadLink: "https://10gb.vn/7dhjwmrko3ym.html"
    },
	{
        src: "https://i.ibb.co/QMv6rXZ/OF-Lobo-Carreira-Bastian-Karim.jpg",
        name: "[20240817] OF - Lobo Carreira & Bastian Karim",
        downloadLink: "https://10gb.vn/iolfu33e6o6c.html"
    },
	{
        src: "https://i.ibb.co/M54wHFS/OF-Martins-22cm-Johnny-Pe-Franco-Simon.jpg",
        name: "[20240817] OF - Martins 22cm, Johnny Pe, Franco & Simon",
        downloadLink: "https://10gb.vn/3ywxoa5jrvcc.html"
    },
	{
        src: "https://i.ibb.co/Qbmy8tt/VOYR-Valney-Chocolate-Caio-Rodrigues.jpg",
        name: "[20240817] VOYR - Valney Chocolate & Caio Rodrigues",
        downloadLink: "https://10gb.vn/bdsld00n8ust.html"
    },
	{
        src: "https://i.ibb.co/nnMFQsr/Meninos-Online-Jo-ozinho-Lucas-Ferrari-C-ssio-Baumanm.jpg",
        name: "[20240817] Meninos Online - Joãozinho, Lucas Ferrari & Cássio Baumanm",
        downloadLink: "https://10gb.vn/k299t7nnjvbd.html"
    },
	{
        src: "https://i.ibb.co/CBdb4Pk/OF-Dave-Wikkinson-Angel-Gomez-Lucho-Gonzalez-Mateo-Rivillio.jpg",
        name: "[20240817] OF - Dave Wikkinson, Angel Gomez, Lucho Gonzalez & Mateo Rivillio",
        downloadLink: "https://10gb.vn/u1ogjlzw0f5y.html"
    },
	{
        src: "https://i.ibb.co/6tq4LST/OF-Magic-Mike-Hung-Raj.jpg",
        name: "[20240817] OF - Magic Mike Hung & Raj",
        downloadLink: "https://10gb.vn/pa7kthl4xf9y.html"
    },
	{
        src: "https://i.ibb.co/ZhLbh5m/OF-Morgxn-Thicke-Kyle-Denton.jpg",
        name: "[20240817] OF - Morgxn Thicke & Kyle Denton",
        downloadLink: "https://10gb.vn/0qjvwz43ox57.html"
    },
	{
        src: "https://i.ibb.co/YLgFPJJ/Titan-Men-Junior-Stellano-Steven-Daigle-Tom-Wolfe.jpg",
        name: "[20240817] Titan Men - Junior Stellano, Steven Daigle & Tom Wolfe",
        downloadLink: "https://10gb.vn/rb7d54mttjtf.html"
    },
	{
        src: "https://i.ibb.co/stPXXg8/XVideos-RED-Tiago-Gaucho-Silver-New-Grey.jpg",
        name: "[20240817] XVideos RED - Tiago Gaucho & SilverNewGrey",
        downloadLink: "https://10gb.vn/2j3m2gh8i296.html"
    },
	{
        src: "https://i.ibb.co/wsdbJSc/Sticky-Rub-Say-Uncle-Derek-Allen-Jace-Starr.jpg",
        name: "[20240817] Sticky Rub (Say Uncle) - Derek Allen & Jace Starr",
        downloadLink: "https://10gb.vn/0a8er48qn91n.html"
    },
	{
        src: "https://i.ibb.co/KmYhZG6/ASG-Max-Jayden-Marcos-Joseph-Hart.jpg",
        name: "[20240818] ASG Max - Jayden Marcos & Joseph Hart",
        downloadLink: "https://10gb.vn/em9o6hipu9uz.html"
    },
	{
        src: "https://i.ibb.co/4S4BcX4/Cocky-Boys-Dillon-Faze-Jordan-Starr.jpg",
        name: "[20240818] Cocky Boys - Dillon Faze & Jordan Starr",
        downloadLink: "https://10gb.vn/1jwdf6taxp6g.html"
    },
	{
        src: "https://i.ibb.co/Y2WNhDV/Men-At-Play-Guillaume-Wayne-Ricky-Hard.jpg",
        name: "[20240818] MenAtPlay - Guillaume Wayne & Ricky Hard",
        downloadLink: "https://10gb.vn/ac6ziioqjtb2.html"
    },
	{
        src: "https://i.ibb.co/VxFjDZW/Naked-Sword-Damian-Night-Ro-Reyes.jpg",
        name: "[20240818] Naked Sword - Damian Night & Ro Reyes",
        downloadLink: "https://10gb.vn/4b86xuyi32sa.html"
    },
	{
        src: "https://i.ibb.co/56xsJMD/OF-Andre-Pijote-Eric-Rey.jpg",
        name: "[20240818] OF - Andre Pijote & Eric Rey",
        downloadLink: "https://10gb.vn/rk3qooayz024.html"
    },
	{
        src: "https://i.ibb.co/TWrDN9M/OF-Cole-Connor-Felipe-Ferro-Jose-Quevedo.jpg",
        name: "[20240818] OF - Cole Connor, Felipe Ferro & Jose Quevedo",
        downloadLink: "https://10gb.vn/0r3l5fvk4joq.html"
    },
	{
        src: "https://i.ibb.co/MNttCNp/OF-Daddy-XXXL-Bastian-Karim.jpg",
        name: "[20240818] OF - DaddyXXXL & Bastian Karim",
        downloadLink: "https://10gb.vn/i8mrecbkhigb.html"
    },
	{
        src: "https://i.ibb.co/sJcKfJ4/OF-Leo-Bumstead-Manuel-Skye.jpg",
        name: "[20240818] OF - Leo Bumstead & Manuel Skye",
        downloadLink: "https://10gb.vn/41sfvkzaggie.html"
    },
	{
        src: "https://i.ibb.co/pbYsTPT/OF-Nick-Butler-Beau-Butler-Halif-Faruk.jpg",
        name: "[20240818] OF - Nick Butler, Beau Butler & Halif Faruk",
        downloadLink: "https://10gb.vn/xl3dvdoouyfw.html"
    },
	{
        src: "https://i.ibb.co/g7bF7Cr/OF-Scott-Wild-Luciano.jpg",
        name: "[20240818] OF - Scott Wild & Luciano",
        downloadLink: "https://10gb.vn/pf60lys6lt0y.html"
    },
	{
        src: "https://i.ibb.co/gTk8B9Q/VOYR-Marlon-Costa-Valney-Chocolate.jpg",
        name: "[20240818] VOYR - Marlon Costa & Valney Chocolate",
        downloadLink: "https://10gb.vn/4sn6dv5m8uar.html"
    },
	{
        src: "https://i.ibb.co/0y7JGYd/MEN-Ashton-Summers-Reese-Rideout-Shamu-Azizam.jpg",
        name: "[20240821] MEN - Ashton Summers, Reese Rideout & Shamu Azizam",
        downloadLink: "https://10gb.vn/0g7ohjz0uokv.html"
    },
	{
        src: "https://i.ibb.co/CJnBzfG/OF-Viktor-Onee-Marco-Maxxx-Tomy-Stark.jpg",
        name: "[20240821] OF - ViktorOnee, Marco Maxxx & Tomy Stark",
        downloadLink: "https://10gb.vn/5vlp1ll560ic.html"
    },
	{
        src: "https://i.ibb.co/r2VFjNF/Randy-Blue-Abele-Place-Jake-Davis.jpg",
        name: "[20240821] Randy Blue - Abele Place & Jake Davis",
        downloadLink: "https://10gb.vn/r1lg6z0th0rw.html"
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
