let tech_box = document.querySelector('.tech_box');
let button = document.querySelector('.but')
let tech1 = document.querySelector('.tech1')
let tech2 = document.querySelector('.tech2')
let tech3 = document.querySelector('.tech3')
let tech4 = document.querySelector('.tech4')

let tech = ['ทะเล', 'มีด', 'ขนนก', 'กระเป๋าสะพายข้าง', 'คาตานะ', 'เจ้าหญิง', 'ปืน', 'หนังสือพิมพ์', 'ดาว', 'หมวกเชฟ', 'ผ้าพันคอ', 'เรือ', 'ต่างหู', 'รอยสัก', 'ส้ม', 'เขากวาง', 'กระต่าย', 'หมี', 'วาฬ', 'นก', 'ร่ม', 'งู', 'ข้าวปั้น', 'ผี', 'รอยแผลเป็นที่ตา', 'เนคไท', 'ลูกเต๋า', 'กระบองเพรช', 'ดาบ', 'น้ำแข็ง', 'เงื้อก', 'ตรีศูล', 'เขี้ยว', 'เชือก', 'ทราย', 'ธนู', 'ทอง'
            , 'ไม้เท้า', 'ความมืด', 'เลือด', 'สายไฟ', 'ไฟฟ้า', 'หนามแหลม', 'สร้อยคอ', 'ผ้าคลุม', 'แมว', 'ดอกไม้', 'ชุดดำ', 'แว่นดำ', 'แว่น', 'หูฟัง', 'ชุดยูกะตะ', 'น้ำ', 'หมา', 'หยั่กใหย่', 'ความกลัว', 'ชุดขาว', 'น้ำตา', 'ใบไม้', 'ซูชิ', 'ถุงมือ', 'ผ้าปิดปาก', 'ผ้าปิดตา', 'ค้อน', 'หอก', 'โล่', 'มังกร', 'โจร', 'ร่าเริง', 'เศร้า', 'พลุไฟ', 'แสงนีออน', 'กองไฟ', 'ซอมบี้', 'ขวาน', 'สร้อยข้อมือ', 'ลิปสติก', 'มีด', 'โบราณวัตถุ', 'เคียว'
            , 'เล็บเจล', 'มงกุฎ', 'หุ่นยนต์', 'กระบอกสองท้อน', 'หิมะ', 'หูสัตว์', 'พิษ', 'ตาบอด', 'แพนด้าแดง', 'เครื่องบิน', 'หมาป่า', 'ปีกนางฟ้า', 'ปีกปีศาจ', 'ขอนไม้', 'แม่น้ำ', 'กระจก', 'มีดสั้น', 'ฉลาม', 'โจรสลัด', 'บันได', 'ช่อดอกไม้', 'รถไฟ', 'กรรไกร', 'ป่า', 'ทุ่งหญ้า', 'เทียน', 'ชุดเกราะ', 'ชุดทหาร', 'เค้ก', 'เสื้อกันหนาว', 'เลื่อย', 'ถ่ำ', 'ชุดว่ายน้ำ', 'แพะ', 'จระเข้', 'รุ้ง', 'เครื่องจัก', 'ปีศาจ', 'นางฟ้า', 'หน้ากาก', 'นักร้อง', 'คาเฟ่', 'นักรบ']

button.addEventListener('click', () => {
    var randomtech1 = tech[Math.floor(Math.random() * tech.length)]
    tech1.innerHTML = randomtech1;
    var randomtech2 = tech[Math.floor(Math.random() * tech.length)]
    tech2.innerHTML = randomtech2;
    var randomtech3 = tech[Math.floor(Math.random() * tech.length)]
    tech3.innerHTML = randomtech3;
    var randomtech4 = tech[Math.floor(Math.random() * tech.length)]
    tech4.innerHTML = randomtech4;

    for (var RT2 = randomtech2; RT2 = randomtech1; RT2++ ) {
        if (randomtech2 == randomtech1) {
            var randomtech2 = tech[Math.floor(Math.random() * tech.length)]
            tech2.innerHTML = randomtech2;
        }
        else if (randomtech2 !== randomtech1) {
            break;
        }
    }

    for (var RT3 = randomtech3; RT3 = randomtech2, RT3 = randomtech1; RT3++ ) {
        if (randomtech3 == randomtech2) {
            var randomtech3 = tech[Math.floor(Math.random() * tech.length)]
            tech3.innerHTML = randomtech3;
        }
        else if (randomtech3 == randomtech1) {
            var randomtech3 = tech[Math.floor(Math.random() * tech.length)]
            tech3.innerHTML = randomtech3;
        }
        else if ( randomtech3 == randomtech1) {
            var randomtech3 = tech[Math.floor(Math.random() * tech.length)]
            tech3.innerHTML = randomtech3;
        }
        else if (randomtech3 !== randomtech2) {
            break;
        }
        else if (randomtech3 !== randomtech1) {
            break;
        }
    }

    for (var RT4 = randomtech4; RT4 = randomtech3, RT4 = randomtech2, RT4 = randomtech1; RT4++ ) {
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
        else if (randomtech4 !== randomtech3) {
            break;
        }
        else if (randomtech4 !== randomtech2) {
            break;
        }
        else if (randomtech4 !== randomtech1) {
            break;
        }
    }

    if (tech_box.style.display == 'none') {
        tech_box.style.display = 'block';
        button.innerHTML = 'สุ่มอีกครั้ง';
    }
    else {
        tech.style.display = 'block';
    }
})