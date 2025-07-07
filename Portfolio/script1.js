const addButton = document.getElementById('addButton');
const companyInput = document.getElementById('company');
const positionInput = document.getElementById('position');
const statusSelect = document.getElementById('status');
const jobList = document.getElementById('joblist');

addButton.addEventListener('click', () => {
    const company = companyInput.value.trim();
    const position = positionInput.value.trim();
    const status = statusSelect.value;

    if (company === '' || position === '') return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = `${company}/${position}`;

    const statusTag = document.createElement('span');
    statusTag.textContent = status;
    statusTag.classList.add('status', status);

    console.log('追加したステータス:', status);
    console.log('statusクラス追加確認:', statusTag.classList);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(statusTag);
    li.appendChild(deleteButton);
    jobList.appendChild(li);

    companyInput.value = '';
    positionInput.value = '';
});