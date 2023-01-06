//ตัวแปรทั้งหลาย//////////
let tech_box = document.querySelector('.tech_box');
let button = document.querySelector('.but');
let tech1 = document.querySelector('.tech1');
let tech2 = document.querySelector('.tech2');
let tech3 = document.querySelector('.tech3');
let tech4 = document.querySelector('.tech4');
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
///////////////////
let tech = ['ทะเล', 'มีด', 'ขนนก', 'กระเป๋าสะพายข้าง', 'คาตานะ', 'เจ้าหญิง', 'ปืน', 'หนังสือพิมพ์', 'ดาว', 'หมวกเชฟ', 'ผ้าพันคอ', 'เรือ', 'ต่างหู', 'รอยสัก', 'ส้ม', 'เขากวาง', 'กระต่าย', 'หมี', 'วาฬ', 'นก', 'ร่ม', 'งู', 'ข้าวปั้น', 'ผี', 'รอยแผลเป็นที่ตา', 'เนคไท', 'ลูกเต๋า', 'กระบองเพรช', 'ดาบ', 'น้ำแข็ง', 'เงื้อก', 'ตรีศูล', 'เขี้ยว', 'เชือก', 'ทราย', 'ธนู', 'ทอง'
, 'ไม้เท้า', 'ความมืด', 'เลือด', 'สายไฟ', 'ไฟฟ้า', 'หนามแหลม', 'สร้อยคอ', 'ผ้าคลุม', 'แมว', 'ดอกไม้', 'ชุดดำ', 'แว่นดำ', 'แว่น', 'หูฟัง', 'ชุดยูกะตะ', 'น้ำ', 'หมา', 'หยั่กใหย่', 'ความกลัว', 'ชุดขาว', 'น้ำตา', 'ใบไม้', 'ซูชิ', 'ถุงมือ', 'ผ้าปิดปาก', 'ผ้าปิดตา', 'ค้อน', 'หอก', 'โล่', 'มังกร', 'โจร', 'ร่าเริง', 'เศร้า', 'พลุไฟ', 'แสงนีออน', 'กองไฟ', 'ซอมบี้', 'ขวาน', 'สร้อยข้อมือ', 'ลิปสติก', 'มีด', 'โบราณวัตถุ', 'เคียว'
, 'เล็บเจล', 'มงกุฎ', 'หุ่นยนต์', 'กระบอกสองท้อน', 'หิมะ', 'หูสัตว์', 'พิษ', 'ตาบอด', 'แพนด้าแดง', 'เครื่องบิน', 'หมาป่า', 'ปีกนางฟ้า', 'ปีกปีศาจ', 'ขอนไม้', 'แม่น้ำ', 'กระจก', 'มีดสั้น', 'ฉลาม', 'โจรสลัด', 'บันได', 'ช่อดอกไม้', 'รถไฟ', 'กรรไกร', 'ป่า', 'ทุ่งหญ้า', 'เทียน', 'ชุดเกราะ', 'ชุดทหาร', 'เค้ก', 'เสื้อกันหนาว', 'เลื่อย', 'ถ่ำ', 'ชุดว่ายน้ำ', 'แพะ', 'จระเข้', 'รุ้ง', 'เครื่องจัก', 'ปีศาจ', 'นางฟ้า', 'หน้ากาก', 'นักร้อง', 'คาเฟ่', 'นักรบ', 'มอนสเตอร์'
, 'นักสืบ', 'ดวงจันทร์', 'ความหยิ่งทะนง', 'ความกลัว', 'นักประดิษฐ์', 'โกรธจัด', 'กระดิ่ง', 'ครั่ง', 'กลายพันธุ์', 'ป่วย', 'อ้อน', 'งอน']
//////////////////

box1.addEventListener('click', () => {
    box1.classList.toggle('box_L1');
})

box2.addEventListener('click', () => {
    box2.classList.toggle('box_L2');
})

box3.addEventListener('click', () => {
    box3.classList.toggle('box_L3');
})

box4.addEventListener('click', () => {
    box4.classList.toggle('box_L4');
})

button.addEventListener('click', () => {

   //สุ่ม1
    if (box1.className === 'box1') {
        var randomtech1 = tech[Math.floor(Math.random() * tech.length)]
    tech1.innerHTML = randomtech1;
    }
        
    //สุ่ม2
    if (box2.className === 'box2') {
        var randomtech2 = tech[Math.floor(Math.random() * tech.length)]
    tech2.innerHTML = randomtech2;
    }
      
    //สุ่ม3
    if (box3.className === 'box3') {
        var randomtech3 = tech[Math.floor(Math.random() * tech.length)]
    tech3.innerHTML = randomtech3;
    }
    
    //สุ่ม4
    if (box4.className === 'box4') {
        var randomtech4 = tech[Math.floor(Math.random() * tech.length)]
    tech4.innerHTML = randomtech4;
    }

    //เช็ค
    if (box1.className === 'box1') {
        for (var RT1 = randomtech1; RT1 === randomtech2,randomtech3,randomtech4; RT2++ ) {
            if (randomtech1 == randomtech2) {
                var randomtech1 = tech[Math.floor(Math.random() * tech.length)]
                tech1.innerHTML = randomtech1;
            }
            else if (randomtech1 == randomtech3) {
                var randomtech1 = tech[Math.floor(Math.random() * tech.length)]
                tech1.innerHTML = randomtech1;
            }
            else if (randomtech1 == randomtech4) {
                var randomtech3 = tech[Math.floor(Math.random() * tech.length)]
                tech1.innerHTML = randomtech1;
            }
            else if (tech1.innerHTML !== tech2.innerHTML) {
                break;
            }
            else if (tech1.innerHTML !== tech3.innerHTML) {
                break;
            }
            else if (tech1.innerHTML !== tech4.innerHTML) {
                break;
            }
        }
    }
    else if (box1.className === 'box_L1') {
        var randomtech1 = randomtech1;
        tech !== randomtech1;
        randomtech1 !== tech2.innerHTML;
        randomtech1 !== tech3.innerHTML;
        randomtech1 !== tech4.innerHTML;
    } 
    
    if (box2.className === 'box2') {
        for (var RT2 = randomtech2; RT2 === randomtech1,randomtech3,randomtech4; RT2++ ) {
            if (randomtech2 == randomtech1) {
                var randomtech2 = tech[Math.floor(Math.random() * tech.length)]
                tech2.innerHTML = randomtech2;
            }
            else if (randomtech2 == randomtech3) {
                var randomtech2 = tech[Math.floor(Math.random() * tech.length)]
                tech2.innerHTML = randomtech2;
            }
            else if (randomtech2 == randomtech4) {
                var randomtech2 = tech[Math.floor(Math.random() * tech.length)]
                tech2.innerHTML = randomtech2;
            }
            else if (tech2.innerHTML !== tech1.innerHTML) {
                break;
            }
            else if (tech2.innerHTML !== tech3.innerHTML) {
                break;
            }
            else if (tech2.innerHTML !== tech4.innerHTML) {
                break;
            }
        }
    }
    else if (box2.className === 'box_L2') {
        var randomtech2 = randomtech2;
        tech !== randomtech2;
        randomtech2 !== tech1.innerHTML;
        randomtech2 !== tech3.innerHTML;
        randomtech2 !== tech4.innerHTML;
    } 

    if (box3.className === 'box3') {
        for (var RT3 = randomtech3; RT3 === randomtech2,randomtech1,randomtech4; RT3++ ) {
            if (randomtech3 == randomtech2) {
                var randomtech3 = tech[Math.floor(Math.random() * tech.length)]
                tech3.innerHTML = randomtech3;
            }
            else if (randomtech3 == randomtech1) {
                var randomtech3 = tech[Math.floor(Math.random() * tech.length)]
                tech3.innerHTML = randomtech3;
            }
            else if ( randomtech3 == randomtech4) {
                var randomtech3 = tech[Math.floor(Math.random() * tech.length)]
                tech3.innerHTML = randomtech3;
            }
            else if (tech3.innerHTML !== tech2.innerHTML) {
                break;
            }
            else if (tech3.innerHTML !== tech1.innerHTML) {
                break;
            }
            else if (tech3.innerHTML !== tech4.innerHTML) {
                break;
            }
        }
    }
    else if (box3.className === 'box_L3') {
        var randomtech3 = randomtech3;
        tech !== randomtech3;
        randomtech3 !== tech1.innerHTML;
        randomtech3 !== tech2.innerHTML;
        randomtech3 !== tech4.innerHTML;
    } 

    if (box4.className === 'box4') {
        for (var RT4 = randomtech4; RT4 === randomtech3,randomtech2,randomtech1; RT4++ ) {
            if (randomtech4 == randomtech3) {
                var randomtech4 = tech[Math.floor(Math.random() * tech.length)]
                tech4.innerHTML = randomtech4;
            }
            else if (randomtech4 == randomtech2) {
                var randomtech4 = tech[Math.floor(Math.random() * tech.length)]
                tech4.innerHTML = randomtech4;
            }
            else if (randomtech4 == randomtech1) {
                var randomtech4 = tech[Math.floor(Math.random() * tech.length)]
                tech4.innerHTML = randomtech4;
            }
            else if ( randomtech4 == randomtech3) {
                var randomtech4 = tech[Math.floor(Math.random() * tech.length)]
                tech4.innerHTML = randomtech4;
            }
            else if (tech4.innerHTML !== tech3.innerHTML) {
                break;
            }
            else if (tech4.innerHTML !== tech2.innerHTML) {
                break;
            }
            else if (tech4.innerHTML !== tech1.innerHTML) {
                break;
            }
        }
    }
    else if (box4.className === 'box_L4') {
        var randomtech4 = randomtech4;
        tech !== randomtech4;
        randomtech4 !== tech3.innerHTML;
        randomtech4 !== tech2.innerHTML;
        randomtech4 !== tech1.innerHTML;

    } 

    if (tech_box.style.display == 'none') {
        tech_box.style.display = 'block';
        button.innerHTML = 'สุ่มอีกครั้ง';
    }
    else {
        tech.style.display = 'block';
    }
})