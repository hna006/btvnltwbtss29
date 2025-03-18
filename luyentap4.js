
let jobs = [];
let choice;

function statusJobs(){
    const SUCCESSFULL = 'Hoàn thành';
    const UNUCCESSFULL = 'Chưa hoàn thành';
    let choice = +prompt('Chọn tráng thái công việc\n1.Hoàn thành\n2.Không hoàn thành');
    switch (choice) {
        case 1:
            return SUCCESSFULL;
            break;
        case 2:
        return UNUCCESSFULL;
            break;
        default:
            break;
    }
}

function addJob(jobs){
    const nameOfJob = prompt('Nhập tên công việc:');
    const description = prompt('Nhập mô tả công việc:');
    const time = prompt('Thời gian bắt đầu:');
    const status = statusJobs();
    const newJob = {
        id: Math.ceil(Math.random()*1000000),
        nameOfJob,
        description,
        time,
        status,
    };
    jobs.push(newJob);
    alert('Thêm công việc thành công');
}

function updateStatusJob(jobs){
    const idUpdate = +prompt('Nhập ID công việc muốn chuyển đổi trạng thái:');
    const indexJobUpdate = jobs.findIndex((jobs) => jobs.id === idUpdate);
    let confirmUpdateStatus;

    if(indexJobUpdate !== -1){
        confirmUpdateStatus = confirm('Bạn có chắc chắn muốn thay đổi trạng thái không?');
    }
    else{
        alert('ID công việc không tồn tại');
    }

    if(confirmUpdateStatus){
        jobs[indexJobUpdate].status = statusJobs();
        alert('Cập nhật trạng thái thành công');
        return jobs;
    }
}

function filterByStatus(jobs){
    let choice = +prompt(`Chọn trạng thái muốn lọc:\n1.Hoàn thành\n2. Chưa hoàn thành`);
    switch (choice) {
        case 1:
            const jobsSuccessfull = jobs.filter((jobs) => jobs.status === 'Hoàn thành');
            if(jobsSuccessfull.length === 0){
                alert('Không có công việc hoàn thành');
            }
            else{
                console.table(jobsSuccessfull);
            }
            break;
        case 2:
            const jobsUnsuccessfull = jobs.filter((jobs) => jobs.status === 'Chưa hoàn thành');
            if(jobsUnsuccessfull.length === 0){
                alert('Không có công việc chưa hoàn thành');
            }
            else{
                console.table(jobsUnsuccessfull);
            }
            break;
        default:
            break;
    }
}

function arangeByStuatus(jobs){
    
}

do{
    choice = +prompt(`1. Thêm công việc mới.
2. Hiển thị tất cả các công việc.
3. Cập nhật trạng thái công việc theo id.
4. Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.
5. Sắp xếp các công việc theo trạng thái công việc.
6. Thoát.`);

    if(choice === 1){
        addJob(jobs);
    }
    else if(jobs.length === 0 && !isNaN(choice) && choice < 7){
        alert('Danh sách công việc trống');
    }
    else{
        switch (choice) {
            case 2:
                console.table(jobs);
                break;
            case 3:
                updateStatusJob(jobs);
                break;
            case 4:
                filterByStatus(jobs);
                break;
            case 5:
                
                break;
            case 6:
                arangeByStuatus(jobs);
                break;
            default:
                break;
        }
    }
}   
while(choice !== 6);
