const navigation = document.getElementById('navigation');
const btnMenu = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');


btnMenu.onclick = function() {
    btnMenu.classList.toggle('active');
    navigation.classList.toggle('active');
    closeBtn.style.display = 'block';
}

closeBtn.onclick = function() {
    navigation.classList.remove('active');
    closeBtn.style.display = 'none';
}

