function fakeApiRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.3; // 70%の確率で成功とする
            if (isSuccess) {
                resolve("✅Successfully obtain data");
            } else {
                reject("❌Failed to obtain data");
            }
        }, 2000);
    });
}
const button = document.getElementById('fetchBtn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.textContent = 'Loading message...';

    fakeApiRequest()
        .then((result) => {
            message.textContent = result;
        })
        .catch((error) => {
            message.textContent = error;
        });
});