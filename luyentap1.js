let choice;
let contacts = [];

do {
    choice = +prompt(
        `                   PHẦN MỀM QUẢN LÝ DANH BẠ
        1. Thêm đối tượng Contact vào danh sách liên hệ
        2. Hiển thị danh sách danh bạ
        3. Tìm kiếm thông tin Contact theo số điện thoại
        4. Cập nhật thông tin Contact (name, email, phone) theo id
        5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id
        6. Thoát
        Lựa chọn của bạn: 
        `);
    switch (choice) {
        case 1:
            addNewContact();
            break;
        case 2:
            displayContacts();
            break;
        case 3:
            findContact();
            break;
        case 4:
            updateContact();
            break;
        case 5:
            deleteContact();
            break;
        case 6:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại");
            break;
    }
} while (choice !== 6);

function addNewContact() {
    let number = +prompt("Nhập số lượng danh bạ bạn muốn thêm: ");
    if (!Number.isInteger(number) || number <= 0) {
        console.log("Số lượng bạn nhập không hợp lệ");
        return;
    }
    for (let i = 0; i < number; i++) {
        if (contacts.length == 0) {
            id = 1;
        } else {
            id = contacts[contacts.length - 1].id + 1;
        }
        let name = prompt("Nhập tên người liên hệ: ");
        let email = prompt("Nhập email người liên hệ: ");
        if(!email.includes("@") && !email.endsWith(".com" || !email.endsWith(".vn"))){
            console.log("Email không hợp lệ. Vui lòng nhập lại.");
            i--;
            continue;
        }
        let phone = prompt("Nhập số điện thoại của người liên hệ: ");
        if (phone.length < 8 || phone.length > 11) {
            console.log("Số điện thoại không hợp lệ. Vui lòng nhập lại.");
            i--;
            continue;
        }

        contacts.push({ id, name, email, phone });
    }
    console.log("Danh bạ hiện tại: ", contacts);
}

function displayContacts() {
    if (contacts.length === 0) {
        console.log("Danh bạ trống");
        return;
    }
    console.log("Danh bạ hiện tại: ");
    contacts.forEach(contact => console.log(contact));
}

function findContact() {
    let numberPhone = prompt("Mời bạn nhập số điện thoại: ");
    let foundContacts = contacts.filter(contact => contact.phone.includes(numberPhone));
    if (foundContacts.length === 0) {
        console.log("Số điện thoại không tồn tại trong danh bạ");
        return;
    }
    console.log("Kết quả tìm kiếm là: ", foundContacts);
}

function updateContact() {
    let findId = +prompt("Mời bạn nhập ID muốn tìm kiếm: ");
    let contact = contacts.find(contact => contact.id === findId);
    if (!contact) {
        console.log("ID không tồn tại trong danh bạ");
        return;
    }
    contact.name = prompt("Nhập tên người liên hệ: ");
    let email = prompt("Nhập email người liên hệ: ");
    if(!email.includes("@") && !email.endsWith(".com" || !email.endsWith(".vn"))){
        console.log("Email không hợp lệ. Vui lòng nhập lại.");
        return;
    }
    contact.email = email;
    let phone = prompt("Nhập số điện thoại của người liên hệ: ");
    if (phone.length < 8 || phone.length > 11) {
        console.log("Số điện thoại không hợp lệ. Vui lòng nhập lại.");
        return;
    }
    contact.phone = phone;
    console.log("Cập nhật thành công.");
}

function deleteContact() {
    let findId = +prompt("Mời bạn nhập ID muốn xóa: ");
    let index = contacts.findIndex(contact => contact.id === findId);
    if (index === -1) {
        console.log("ID không tồn tại trong danh bạ");
        return;
    }
    contacts.splice(index, 1);
    console.log("Xóa thành công.");
}