let products = [];
do {
    choice = +prompt("Nhập lựa chọn:\n1.Thêm sản phẩm vào danh sách sản phẩm.\n2.Hiển thị tất cả sản phẩm.\n3.Hiển thị chi tiết sản phẩm theo id.\n4.Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.\n5.Xóa sản phẩm theo id.\n6.Lọc sản phẩm theo khoảng giá.\n7.Thoát.");
    switch (choice) {
        case 1:
            // 1.Thêm sản phẩm vào danh sách sản phẩm.
            addProduct();
            break;
        case 2:
            // 2.Hiển thị tất cả sản phẩm.
            showProduct();
            break;
        case 3:
            // 3.Hiển thị chi tiết sản phẩm theo id.
            productDetail();
            break;
        case 4:
            // 4.Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
            UpdateProduct();
            break;
        case 5:
            // 5.Xóa sản phẩm theo id.
            deleteProduct();
            break;
        case 6:
            // 6.Lọc sản phẩm theo khoảng giá.
            screenProduct();
            break;
        case 7:
            console.log("Thoát!!!");
            break;
        default:
            console.log("Vui lòng nhập lại!!!");          
            break;
    }
} while (choice !== 7);
// Tạo hàm thêm sản phẩm vào danh sách sản phẩm.
function addProduct() {
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    let name = prompt("Nhập tên sản phẩm:");
    let price = +prompt("Nhập giá:");
    let category = prompt("Nhập danh mục:");
    let quantity = +prompt("Nhập số lượng:");
    // Tạo đối tượng
    let product = {
        id : id,
        name : name,
        price : price,
        category : category,
        quantity : quantity,
    }
    // Thêm đối tượng vào mảng
    products.push(product);
    console.log("Thêm sản phẩm thành công.");
}
// Tạo hàm hiển thị tất cả sản phẩm.
function showProduct() {
    if (products.length === 0) {
        console.log("Không có sản phẩm.");
    } else {
        console.table(products);
    }
}
// Tạo hàm hiển thị chi tiết sản phẩm theo id.
function productDetail() {
    let id = +prompt("Nhập id sản phẩm:");
    let product = products.find(product => product.id === id);
    if (product) {
        console.log(`ID: ${product.id}`);
        console.log(`Tên: ${product.name}`);
        console.log(`Giá: ${product.price}`);
        console.log(`Danh mục: ${product.category}`);
        console.log(`Số lượng: ${product.quantity}`); 
    } else {
        console.log("Không tìm thấy sản phẩm với ID:", id);
    }
}
// Tạo hàm cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
function UpdateProduct(array) {
    if (Array.isArray(array)) {
        const IdProductToUpdate = +prompt(`Nhập ID sản phẩm cần cập nhật`);
        const findIndexToUpdate = array.findIndex((product) => product.id === IdProductToUpdate);
        if (findIndexToUpdate !== -1) {
            const updateProductName = prompt(`Nhập tên sản phẩm cập nhật`);
            const updateProductPrice= +prompt(`Nhập giá sản phẩm cập nhật`);
            const updateProductCategory = prompt(`Nhập danh mục sản phẩm cập nhật`);
            const updateProductQuantity = +prompt(`Nhập số lượng sản phẩm cập nhật`);
            array[findIndexToUpdate].Name = updateProductName;
            array[findIndexToUpdate].price = updateProductPrice;
            array[findIndexToUpdate].category = updateProductCategory;
            array[findIndexToUpdate].quantity = updateProductQuantity;
            console.log(`Cập nhật thông tin sản phẩm thành công`);
        } else {
            console.log(`Không tìm thấy sản phẩm`);
        }
    } else {
        console.log(`Mảng không hợp lệ`);
    }
}
function deleteProduct(array) {
    if (Array.isArray(array)) {
        const IdProductToDelete = +prompt(`Nhập ID sản phẩm cần xóa `);
        const findIndexToDelete = array.findIndex((product) => product.id === IdProductToDelete);
        if (findIndexToDelete !== -1) {
            // Hỏi, xác nhận xóa hay không
            const confirmDelete = confirm(`Xác nhận xóa sản phẩm ${array[findIndexToDelete].Name} ? `);
            if (confirmDelete) {
                delete array[findIndexToDelete];
                alert(`Xóa sản phẩm thành công!!`);
            }
        } else {
            console.log(`Không tìm thấy sản phẩm`);
        }
    } else {
        console.log(`Mảng không hợp lệ`);
    }
}
function screenProduct(array) {
    alert(`Lọc sản phẩm theo khoảng giá`);
    const startValue = +prompt(`Nhập giá trị bắt đầu: `);
    const endValue = +prompt(`Nhập giá trị kết thúc: `);
    const productsScreened = array.filter((product) => ((product.price >= startValue) && (product.price <= endValue)))
    console.log(`Sản phẩm sau khi lọc: `);
    console.table(productsScreened);
} 
