const locationData = [
    {
        name: "กทม. และภาคกลาง",
        id: "region-central",
        provinces: [
            {
                name: "กรุงเทพมหานคร",
                id: "province-bkk",
                provinceCode: "10",
                districts: [
                    { name: "พระนคร", districtCode: "1" }, { name: "ดุสิต", districtCode: "2" },
                    { name: "หนองจอก", districtCode: "3" }, { name: "บางรัก", districtCode: "4" },
                    { name: "บางเขน", districtCode: "5" }, { name: "บางกะปิ", districtCode: "6" },
                    { name: "ปทุมวัน", districtCode: "7" }, { name: "ป้อมปราบศัตรูพ่าย", districtCode: "8" },
                    { name: "พระโขนง", districtCode: "9" }, { name: "มีนบุรี", districtCode: "10" },
                    { name: "ลาดกระบัง", districtCode: "11" }, { name: "ยานนาวา", districtCode: "12" },
                    { name: "สัมพันธวงศ์", districtCode: "13" }, { name: "พญาไท", districtCode: "14" },
                    { name: "ธนบุรี", districtCode: "15" }, { name: "บางกอกใหญ่", districtCode: "16" },
                    { name: "ห้วยขวาง", districtCode: "17" }, { name: "คลองสาน", districtCode: "18" },
                    { name: "ตลิ่งชัน", districtCode: "19" }, { name: "บางกอกน้อย", districtCode: "20" },
                    { name: "บางขุนเทียน", districtCode: "21" }, { name: "ภาษีเจริญ", districtCode: "22" },
                    { name: "หนองแขม", districtCode: "23" }, { name: "ราษฎร์บูรณะ", districtCode: "24" },
                    { name: "บางพลัด", districtCode: "25" }, { name: "ดินแดง", districtCode: "26" },
                    { name: "บึงกุ่ม", districtCode: "27" }, { name: "สาทร", districtCode: "28" },
                    { name: "บางซื่อ", districtCode: "29" }, { name: "จตุจักร", districtCode: "30" },
                    { name: "บางคอแหลม", districtCode: "31" }, { name: "ประเวศ", districtCode: "32" },
                    { name: "คลองเตย", districtCode: "33" }, { name: "สวนหลวง", districtCode: "34" },
                    { name: "จอมทอง", districtCode: "35" }, { name: "ดอนเมือง", districtCode: "36" },
                    { name: "ราชเทวี", districtCode: "37" }, { name: "ลาดพร้าว", districtCode: "38" },
                    { name: "วัฒนา", districtCode: "39" }, { name: "บางแค", districtCode: "40" },
                    { name: "หลักสี่", districtCode: "41" }, { name: "สายไหม", districtCode: "42" },
                    { name: "คันนายาว", districtCode: "43" }, { name: "สะพานสูง", districtCode: "44" },
                    { name: "วังทองหลาง", districtCode: "45" }, { name: "คลองสามวา", districtCode: "46" },
                    { name: "บางนา", districtCode: "47" }, { name: "ทวีวัฒนา", districtCode: "48" },
                    { name: "ทุ่งครุ", districtCode: "49" }, { name: "บางบอน", districtCode: "50" }
                ]
            },
            {
                name: "สมุทรปราการ",
                id: "province-samutprakan",
                provinceCode: "11",
                districts: [
                    { name: "เมืองสมุทรปราการ", districtCode: "1" },
                    { name: "บางบ่อ", districtCode: "2" },
                    { name: "บางพลี", districtCode: "3" },
                    { name: "พระประแดง", districtCode: "4" },
                    { name: "พระสมุทรเจดีย์", districtCode: "5" },
                    { name: "บางเสาธง", districtCode: "6" }
                ]
            },
            {
                name: "นนทบุรี",
                id: "province-nonthaburi",
                provinceCode: "12",
                districts: [
                    { name: "เมืองนนทบุรี", districtCode: "1" },
                    { name: "บางกรวย", districtCode: "2" },
                    { name: "บางใหญ่", districtCode: "3" },
                    { name: "บางบัวทอง", districtCode: "4" },
                    { name: "ไทรน้อย", districtCode: "5" },
                    { name: "ปากเกร็ด", districtCode: "6" }
                ]
            },
            {
                name: "ปทุมธานี",
                id: "province-pathumthani",
                provinceCode: "13",
                districts: [
                    { name: "เมืองปทุมธานี", districtCode: "1" },
                    { name: "คลองหลวง", districtCode: "2" },
                    { name: "ธัญบุรี", districtCode: "3" },
                    { name: "หนองเสือ", districtCode: "4" },
                    { name: "ลาดหลุมแก้ว", districtCode: "5" },
                    { name: "ลำลูกกา", districtCode: "6" },
                    { name: "สามโคก", districtCode: "7" }
                ]
            },
            {
                name: "พระนครศรีอยุธยา",
                id: "province-phranakhonsiayutthaya",
                provinceCode: "14",
                districts: [
                    { name: "พระนครศรีอยุธยา", districtCode: "1" },
                    { name: "ท่าเรือ", districtCode: "2" },
                    { name: "นครหลวง", districtCode: "3" },
                    { name: "บางไทร", districtCode: "4" },
                    { name: "บางบาล", districtCode: "5" },
                    { name: "บางปะอิน", districtCode: "6" },
                    { name: "บางปะหัน", districtCode: "7" },
                    { name: "ผักไห่", districtCode: "8" },
                    { name: "ภาชี", districtCode: "9" },
                    { name: "ลาดบัวหลวง", districtCode: "10" },
                    { name: "วังน้อย", districtCode: "11" },
                    { name: "เสนา", districtCode: "12" },
                    { name: "บางซ้าย", districtCode: "13" },
                    { name: "อุทัย", districtCode: "14" },
                    { name: "มหาราช", districtCode: "15" },
                    { name: "บ้านแพรก", districtCode: "16" },
                    { name: "เสนา, ลาดบัวหลวง", districtCode: "17" }
                ]
            },
            {
                name: "อ่างทอง",
                id: "province-angthong",
                provinceCode: "15",
                districts: [
                    { name: "เมืองอ่างทอง", districtCode: "1" },
                    { name: "ไชโย", districtCode: "2" },
                    { name: "ป่าโมก", districtCode: "3" },
                    { name: "โพธิ์ทอง", districtCode: "4" },
                    { name: "แสวงหา", districtCode: "5" },
                    { name: "วิเศษชัยชาญ", districtCode: "6" },
                    { name: "สามโก้", districtCode: "7" }
                ]
            },
            {
                name: "ลพบุรี",
                id: "province-lopburi",
                provinceCode: "16",
                districts: [
                    { name: "เมืองลพบุรี", districtCode: "1" },
                    { name: "พัฒนานิคม", districtCode: "2" },
                    { name: "โคกสำโรง", districtCode: "3" },
                    { name: "ชัยบาดาล", districtCode: "4" },
                    { name: "ท่าวุ้ง", districtCode: "5" },
                    { name: "บ้านหมี่", districtCode: "6" },
                    { name: "ท่าหลวง", districtCode: "7" },
                    { name: "สระโบสถ์", districtCode: "8" },
                    { name: "โคกเจริญ", districtCode: "9" },
                    { name: "ลำสนธิ", districtCode: "10" },
                    { name: "หนองม่วง", districtCode: "11" }
                ]
            },
            {
                name: "สิงห์บุรี",
                id: "province-singburi",
                provinceCode: "17",
                districts: [
                    { name: "เมืองสิงห์บุรี", districtCode: "1" },
                    { name: "บางระจัน", districtCode: "2" },
                    { name: "ค่ายบางระจัน", districtCode: "3" },
                    { name: "พรหมบุรี", districtCode: "4" },
                    { name: "ท่าช้าง", districtCode: "5" },
                    { name: "อินทร์บุรี", districtCode: "6" }
                ]
            },
            {
                name: "ชัยนาท",
                id: "province-chainat",
                provinceCode: "18",
                districts: [
                    { name: "เมืองชัยนาท", districtCode: "1" },
                    { name: "มโนรมย์", districtCode: "2" },
                    { name: "วัดสิงห์", districtCode: "3" },
                    { name: "สรรพยา", districtCode: "4" },
                    { name: "สรรคบุรี", districtCode: "5" },
                    { name: "หันคา", districtCode: "6" },
                    { name: "หนองมะโมง", districtCode: "7" },
                    { name: "เนินขาม", districtCode: "8" }
                ]
            },
            {
                name: "สระบุรี",
                id: "province-saraburi",
                provinceCode: "19",
                districts: [
                    { name: "เมืองสระบุรี", districtCode: "1" },
                    { name: "แก่งคอย", districtCode: "2" },
                    { name: "หนองแค", districtCode: "3" },
                    { name: "วิหารแดง", districtCode: "4" },
                    { name: "หนองแซง", districtCode: "5" },
                    { name: "บ้านหมอ", districtCode: "6" },
                    { name: "ดอนพุด", districtCode: "7" },
                    { name: "หนองโดน", districtCode: "8" },
                    { name: "พระพุทธบาท", districtCode: "9" },
                    { name: "เสาไห้", districtCode: "10" },
                    { name: "มวกเหล็ก", districtCode: "11" },
                    { name: "วังม่วง", districtCode: "12" },
                    { name: "เฉลิมพระเกียรติ", districtCode: "13" }
                ]
            },
            {
                name: "นครนายก",
                id: "province-nakhonnayok",
                provinceCode: "26",
                districts: [
                    { name: "เมืองนครนายก", districtCode: "1" },
                    { name: "ปากพลี", districtCode: "2" },
                    { name: "บ้านนา", districtCode: "3" },
                    { name: "องครักษ์", districtCode: "4" }
                ]
            },
            {
                name: "นครสวรรค์",
                id: "province-nakhonsawan",
                provinceCode: "60",
                districts: [
                    { name: "เมืองนครสวรรค์", districtCode: "1" },
                    { name: "โกรกพระ", districtCode: "2" },
                    { name: "ชุมแสง", districtCode: "3" },
                    { name: "หนองบัว", districtCode: "4" },
                    { name: "บรรพตพิสัย", districtCode: "5" },
                    { name: "เก้าเลี้ยว", districtCode: "6" },
                    { name: "ตาคลี", districtCode: "7" },
                    { name: "ท่าตะโก", districtCode: "8" },
                    { name: "ไพศาลี", districtCode: "9" },
                    { name: "พยุหะคีรี", districtCode: "10" },
                    { name: "ลาดยาว", districtCode: "11" },
                    { name: "ตากฟ้า", districtCode: "12" },
                    { name: "แม่วงก์", districtCode: "13" },
                    { name: "แม่เปิน", districtCode: "14" },
                    { name: "ชุมตาบง", districtCode: "15" }
                ]
            },
            {
                name: "อุทัยธานี",
                id: "province-uthaithani",
                provinceCode: "61",
                districts: [
                    { name: "เมืองอุทัยธานี", districtCode: "1" },
                    { name: "ทัพทัน", districtCode: "2" },
                    { name: "สว่างอารมณ์", districtCode: "3" },
                    { name: "หนองฉาง", districtCode: "4" },
                    { name: "หนองขาหย่าง", districtCode: "5" },
                    { name: "บ้านไร่", districtCode: "6" },
                    { name: "ลานสัก", districtCode: "7" },
                    { name: "ห้วยคต", districtCode: "8" }
                ]
            },
            {
                name: "กำแพงเพชร",
                id: "province-kamphaengphet",
                provinceCode: "62",
                districts: [
                    { name: "เมืองกำแพงเพชร", districtCode: "1" },
                    { name: "ไทรงาม", districtCode: "2" },
                    { name: "คลองลาน", districtCode: "3" },
                    { name: "ขาณุวรลักษบุรี", districtCode: "4" },
                    { name: "คลองขลุง", districtCode: "5" },
                    { name: "พรานกระต่าย", districtCode: "6" },
                    { name: "ลานกระบือ", districtCode: "7" },
                    { name: "ทรายทองวัฒนา", districtCode: "8" },
                    { name: "ปางศิลาทอง", districtCode: "9" },
                    { name: "บึงสามัคคี", districtCode: "10" },
                    { name: "โกสัมพีนคร", districtCode: "11" },
                    { name: "กิ่งอำเภอนครไตรตรึงษ์", districtCode: "12" },
                    { name: "กิ่งอำเภอปางมะค่า", districtCode: "13" }
                ]
            },
            {
                name: "สุโขทัย",
                id: "province-sukhothai",
                provinceCode: "64",
                districts: [
                    { name: "เมืองสุโขทัย", districtCode: "1" },
                    { name: "บ้านด่านลานหอย", districtCode: "2" },
                    { name: "คีรีมาศ", districtCode: "3" },
                    { name: "กงไกรลาศ", districtCode: "4" },
                    { name: "ศรีสัชนาลัย", districtCode: "5" },
                    { name: "ศรีสำโรง", districtCode: "6" },
                    { name: "สวรรคโลก", districtCode: "7" },
                    { name: "ศรีนคร", districtCode: "8" },
                    { name: "ทุ่งเสลี่ยม", districtCode: "9" },
                    { name: "กิ่งอำเภอเชียงยืน", districtCode: "10" }
                ]
            },
            {
                name: "พิษณุโลก",
                id: "province-phitsanulok",
                provinceCode: "65",
                districts: [
                    { name: "เมืองพิษณุโลก", districtCode: "1" },
                    { name: "นครไทย", districtCode: "2" },
                    { name: "ชาติตระการ", districtCode: "3" },
                    { name: "บางระกำ", districtCode: "4" },
                    { name: "บางกระทุ่ม", districtCode: "5" },
                    { name: "พรหมพิราม", districtCode: "6" },
                    { name: "วัดโบสถ์", districtCode: "7" },
                    { name: "วังทอง", districtCode: "8" },
                    { name: "เนินมะปราง", districtCode: "9" },
                    { name: "กิ่งอำเภอทรัพย์ไพรวัลย์", districtCode: "10" },
                    { name: "กิ่งอำเภอวงฆ้อง", districtCode: "11" },
                    { name: "กิ่งอำเภอนิคมหนองกุลา", districtCode: "12" },
                    { name: "กิ่งอำเภอวังน้ำคู้", districtCode: "13" },
                    { name: "กิ่งอำเภอนครบางยาง", districtCode: "14" }
                ]
            },
            {
                name: "พิจิตร",
                id: "province-phichit",
                provinceCode: "66",
                districts: [
                    { name: "เมืองพิจิตร", districtCode: "1" },
                    { name: "วังทรายพูน", districtCode: "2" },
                    { name: "โพธิ์ประทับช้าง", districtCode: "3" },
                    { name: "ตะพานหิน", districtCode: "4" },
                    { name: "บางมูลนาก", districtCode: "5" },
                    { name: "โพทะเล", districtCode: "6" },
                    { name: "สามง่าม", districtCode: "7" },
                    { name: "ทับคล้อ", districtCode: "8" },
                    { name: "สากเหล็ก", districtCode: "9" },
                    { name: "บึงนาราง", districtCode: "10" },
                    { name: "ดงเจริญ", districtCode: "11" },
                    { name: "วชิรบารมี", districtCode: "12" }
                ]
            },
            {
                name: "เพชรบูรณ์",
                id: "province-phetchabun",
                provinceCode: "67",
                districts: [
                    { name: "เมืองเพชรบูรณ์", districtCode: "1" },
                    { name: "ชนแดน", districtCode: "2" },
                    { name: "หล่มสัก", districtCode: "3" },
                    { name: "หล่มเก่า", districtCode: "4" },
                    { name: "วิเชียรบุรี", districtCode: "5" },
                    { name: "ศรีเทพ", districtCode: "6" },
                    { name: "หนองไผ่", districtCode: "7" },
                    { name: "บึงสามพัน", districtCode: "8" },
                    { name: "น้ำหนาว", districtCode: "9" },
                    { name: "วังโป่ง", districtCode: "10" },
                    { name: "เขาค้อ", districtCode: "11" },
                    { name: "กิ่งอำเภอวังชมภู", districtCode: "12" },
                    { name: "กิ่งอำเภอพุเตย", districtCode: "13" },
                    { name: "กิ่งอำเภอดงขุย", districtCode: "14" },
                    { name: "กิ่งอำเภอเมืองกลาง", districtCode: "15" }
                ]
            },
            {
                name: "สุพรรณบุรี",
                id: "province-suphanburi",
                provinceCode: "72",
                districts: [
                    { name: "เมืองสุพรรณบุรี", districtCode: "1" },
                    { name: "เดิมบางนางบวช", districtCode: "2" },
                    { name: "ด่านช้าง", districtCode: "3" },
                    { name: "บางปลาม้า", districtCode: "4" },
                    { name: "ศรีประจันต์", districtCode: "5" },
                    { name: "ดอนเจดีย์", districtCode: "6" },
                    { name: "สองพี่น้อง", districtCode: "7" },
                    { name: "สามชุก", districtCode: "8" },
                    { name: "อู่ทอง", districtCode: "9" },
                    { name: "หนองหญ้าไซ", districtCode: "10" }
                ]
            },
            {
                name: "นครปฐม",
                id: "province-nakhonpathom",
                provinceCode: "73",
                districts: [
                    { name: "เมืองนครปฐม", districtCode: "1" },
                    { name: "กำแพงแสน", districtCode: "2" },
                    { name: "นครชัยศรี", districtCode: "3" },
                    { name: "ดอนตูม", districtCode: "4" },
                    { name: "บางเลน", districtCode: "5" },
                    { name: "สามพราน", districtCode: "6" },
                    { name: "พุทธมณฑล", districtCode: "7" }
                ]
            }, {
                name: "สมุทรสาคร",
                id: "province-samutsakhon",
                provinceCode: "74",
                districts: [
                    { name: "เมืองสมุทรสาคร", districtCode: "1" },
                    { name: "กระทุ่มแบน", districtCode: "2" },
                    { name: "บ้านแพ้ว", districtCode: "3" }
                ]
            },
            {
                name: "สมุทรสงคราม",
                id: "province-samutsongkhram",
                provinceCode: "75",
                districts: [
                    { name: "เมืองสมุทรสงคราม", districtCode: "1" },
                    { name: "บางคนที", districtCode: "2" },
                    { name: "อัมพวา", districtCode: "3" }
                ]
            }
            // จบข้อมูลภาคกลาง
        ]

        // คุณสามารถเพิ่มภาคอื่นๆ ต่อจากนี้ได้ (ภาคเหนือ, ภาคตะวันออกเฉียงเหนือ, etc.)
        // ตัวอย่าง:
        // {
        //     name: "ภาคเหนือ",
        //     id: "region-north",
        //     provinces: [
        //         // ... province data for northern region
        //     ]
        // },        ]
    },

    {
        name: "ภาคเหนือ",
        id: "region-north",
        provinces: [
            {
                name: "เชียงใหม่",
                id: "province-chiangmai",
                provinceCode: "50",
                districts: [
                    { name: "เมืองเชียงใหม่", districtCode: "1" },
                    { name: "จอมทอง", districtCode: "2" },
                    { name: "แม่แจ่ม", districtCode: "3" },
                    { name: "เชียงดาว", districtCode: "4" },
                    { name: "ดอยสะเก็ด", districtCode: "5" },
                    { name: "แม่แตง", districtCode: "6" },
                    { name: "แม่ริม", districtCode: "7" },
                    { name: "สะเมิง", districtCode: "8" },
                    { name: "ฝาง", districtCode: "9" },
                    { name: "แม่อาย", districtCode: "10" },
                    { name: "พร้าว", districtCode: "11" },
                    { name: "สันป่าตอง", districtCode: "12" },
                    { name: "สันกำแพง", districtCode: "13" },
                    { name: "สันทราย", districtCode: "14" },
                    { name: "หางดง", districtCode: "15" },
                    { name: "ฮอด", districtCode: "16" },
                    { name: "ดอยเต่า", districtCode: "17" },
                    { name: "อมก๋อย", districtCode: "18" },
                    { name: "สารภี", districtCode: "19" },
                    { name: "เวียงแหง", districtCode: "20" },
                    { name: "ไชยปราการ", districtCode: "21" },
                    { name: "แม่วาง", districtCode: "22" },
                    { name: "แม่ออน", districtCode: "23" },
                    { name: "ดอยหล่อ", districtCode: "24" },
                    { name: "กัลยาณิวัฒนา", districtCode: "25" },
                    { name: "กิ่งอำเภอวัดจันทร์", districtCode: "26" },
                    { name: "กิ่งอำเภอหมอกฟ้า", districtCode: "27" },
                    { name: "กิ่งอำเภอบ่อหลวง", districtCode: "28" }
                ]
            },
            {
                name: "ลำพูน",
                id: "province-lamphun",
                provinceCode: "51",
                districts: [
                    { name: "เมืองลำพูน", districtCode: "1" },
                    { name: "แม่ทา", districtCode: "2" },
                    { name: "บ้านโฮ่ง", districtCode: "3" },
                    { name: "ลี้", districtCode: "4" },
                    { name: "ทุ่งหัวช้าง", districtCode: "5" },
                    { name: "ป่าซาง", districtCode: "6" },
                    { name: "บ้านธิ", districtCode: "7" },
                    { name: "เวียงหนองล่อง", districtCode: "8" },
                    { name: "กิ่งอำเภอทาขุมเงิน", districtCode: "9" }
                ] // กรุณาเพิ่มข้อมูลอำเภอของลำพูนที่นี่
            },
            {
                name: "ลำปาง",
                id: "province-lampang",
                provinceCode: "52",
                districts: [
                    { name: "เมืองลำปาง", districtCode: "1" },
                    { name: "แม่เมาะ", districtCode: "2" },
                    { name: "เกาะคา", districtCode: "3" },
                    { name: "เสริมงาม", districtCode: "4" },
                    { name: "งาว", districtCode: "5" },
                    { name: "แจ้ห่ม", districtCode: "6" },
                    { name: "วังเหนือ", districtCode: "7" },
                    { name: "เถิน", districtCode: "8" },
                    { name: "แม่พริก", districtCode: "9" },
                    { name: "แม่ทะ", districtCode: "10" },
                    { name: "สบปราบ", districtCode: "11" },
                    { name: "ห้างฉัตร", districtCode: "12" },
                    { name: "เมืองปาน", districtCode: "13" },
                    { name: "กิ่งอำเภอพระธาตุเสด็จ", districtCode: "14" },
                    { name: "กิ่งอำเภอวังเงิน", districtCode: "15" }

                ] // กรุณาเพิ่มข้อมูลอำเภอของลำปางที่นี่
            },
            {
                name: "อุตรดิตถ์",
                id: "province-uttaradit",
                provinceCode: "53",
                districts: [
                    { name: "เมืองอุตรดิตถ์", districtCode: "1" },
                    { name: "ตรอน", districtCode: "2" },
                    { name: "ท่าปลา", districtCode: "3" },
                    { name: "น้ำปาด", districtCode: "4" },
                    { name: "ฟากท่า", districtCode: "5" },
                    { name: "บ้านโคก", districtCode: "6" },
                    { name: "พิชัย", districtCode: "7" },
                    { name: "ลับแล", districtCode: "8" },
                    { name: "ทองแสนขัน", districtCode: "9" }
                ] // กรุณาเพิ่มข้อมูลอำเภอของอุตรดิตถ์ที่นี่
            },
            {
                name: "แพร่",
                id: "province-phrae",
                provinceCode: "54",
                districts: [
                    { name: "เมืองแพร่", districtCode: "1" },
                    { name: "ร้องกวาง", districtCode: "2" },
                    { name: "ลอง", districtCode: "3" },
                    { name: "สูงเม่น", districtCode: "4" },
                    { name: "เด่นชัย", districtCode: "5" },
                    { name: "สอง", districtCode: "6" },
                    { name: "วังชิ้น", districtCode: "7" },
                    { name: "หนองม่วงไข่", districtCode: "8" },
                    { name: "กิ่งอำเภอแดนชุมพล", districtCode: "9" }
                ] // กรุณาเพิ่มข้อมูลอำเภอของแพร่ที่นี่
            },
            {
                name: "น่าน",
                id: "province-nan",
                provinceCode: "55",
                districts: [
                    { name: "เมืองน่าน", districtCode: "1" },
                    { name: "แม่จริม", districtCode: "2" },
                    { name: "บ้านหลวง", districtCode: "3" },
                    { name: "นาน้อย", districtCode: "4" },
                    { name: "ปัว", districtCode: "5" },
                    { name: "ท่าวังผา", districtCode: "6" },
                    { name: "เวียงสา", districtCode: "7" },
                    { name: "ทุ่งช้าง", districtCode: "8" },
                    { name: "เชียงกลาง", districtCode: "9" },
                    { name: "นาหมื่น", districtCode: "10" },
                    { name: "สันติสุข", districtCode: "11" },
                    { name: "บ่อเกลือ", districtCode: "12" },
                    { name: "สองแคว", districtCode: "13" },
                    { name: "ภูเพียง", districtCode: "14" },
                    { name: "เฉลิมพระเกียรติ", districtCode: "15" }
                ] // กรุณาเพิ่มข้อมูลอำเภอของน่านที่นี่
            },
            {
                name: "พะเยา",
                id: "province-phayao",
                provinceCode: "56",
                districts: [
                    { name: "เมืองพะเยา", districtCode: "1" },
                    { name: "จุน", districtCode: "2" },
                    { name: "เชียงคำ", districtCode: "3" },
                    { name: "เชียงม่วน", districtCode: "4" },
                    { name: "ดอกคำใต้", districtCode: "5" },
                    { name: "ปง", districtCode: "6" },
                    { name: "แม่ใจ", districtCode: "7" },
                    { name: "ภูซาง", districtCode: "8" },
                    { name: "ภูกามยาว", districtCode: "9" },
                    { name: "กิ่งอำเภอฟากกว๊าน", districtCode: "10" }
                ] // กรุณาเพิ่มข้อมูลอำเภอของพะเยาที่นี่
            },
            {
                name: "เชียงราย",
                id: "province-chiangrai",
                provinceCode: "57",
                districts: [
                    { name: "เมืองเชียงราย", districtCode: "1" },
                    { name: "เวียงชัย", districtCode: "2" },
                    { name: "เชียงของ", districtCode: "3" },
                    { name: "เทิง", districtCode: "4" },
                    { name: "พาน", districtCode: "5" },
                    { name: "ป่าแดด", districtCode: "6" },
                    { name: "แม่จัน", districtCode: "7" },
                    { name: "เชียงแสน", districtCode: "8" },
                    { name: "แม่สาย", districtCode: "9" },
                    { name: "แม่สรวย", districtCode: "10" },
                    { name: "เวียงป่าเป้า", districtCode: "11" },
                    { name: "พญาเม็งราย", districtCode: "12" },
                    { name: "เวียงแก่น", districtCode: "13" },
                    { name: "ขุนตาล", districtCode: "14" },
                    { name: "แม่ฟ้าหลวง", districtCode: "15" },
                    { name: "แม่ลาว", districtCode: "16" },
                    { name: "เวียงเชียงรุ้ง", districtCode: "17" },
                    { name: "ดอยหลวง", districtCode: "18" },
                    { name: "กิ่งอำเภอนางแล", districtCode: "20" },
                    { name: "กิ่งอำเภอดอยสัก", districtCode: "21" },
                    { name: "กิ่งอำเภอแม่อ้อ", districtCode: "22" },
                    { name: "กิ่งอำเภอวาวี", districtCode: "23" },
                    { name: "กิ่งอำเภอแม่ขะจาน", districtCode: "24" }
                ] // กรุณาเพิ่มข้อมูลอำเภอของเชียงรายที่นี่
            },
            {
                name: "แม่ฮ่องสอน",
                id: "province-maehongson",
                provinceCode: "58",
                districts: [
                    { name: "เมืองแม่ฮ่องสอน", districtCode: "1" },
                    { name: "ขุนยวม", districtCode: "2" },
                    { name: "ปาย", districtCode: "3" },
                    { name: "แม่สะเรียง", districtCode: "4" },
                    { name: "แม่ลาน้อย", districtCode: "5" },
                    { name: "สบเมย", districtCode: "6" },
                    { name: "ปางมะผ้า", districtCode: "7" },
                    { name: "กิ่งอำเภอห้วยโป่ง", districtCode: "8" }
                ] // กรุณาเพิ่มข้อมูลอำเภอของแม่ฮ่องสอนที่นี่
            }
        ]
    },
    // สามารถเพิ่มภาคอื่นๆ ต่อจากนี้ได้ (ภาคตะวันออกเฉียงเหนือ, ภาคตะวันออก, etc.)

    {
        name: "ภาคตะวันออกเฉียงเหนือ", id: "region-northeast", provinces: [
            {
                name: "นครราชสีมา",
                id: "province-nakhonratchasima",
                provinceCode: "30",
                districts: [
                    { name: "เมืองนครราชสีมา", districtCode: "1" },
                    { name: "ครบุรี", districtCode: "2" },
                    { name: "เสิงสาง", districtCode: "3" },
                    { name: "คง", districtCode: "4" },
                    { name: "บ้านเหลื่อม", districtCode: "5" },
                    { name: "จักราช", districtCode: "6" },
                    { name: "โชคชัย", districtCode: "7" },
                    { name: "ด่านขุนทด", districtCode: "8" },
                    { name: "โนนไทย", districtCode: "9" },
                    { name: "โนนสูง", districtCode: "10" },
                    { name: "ขามสะแกแสง", districtCode: "11" },
                    { name: "บัวใหญ่", districtCode: "12" },
                    { name: "ประทาย", districtCode: "13" },
                    { name: "ปักธงชัย", districtCode: "14" },
                    { name: "พิมาย", districtCode: "15" },
                    { name: "ห้วยแถลง", districtCode: "16" },
                    { name: "ชุมพวง", districtCode: "17" },
                    { name: "สูงเนิน", districtCode: "18" },
                    { name: "ขามทะเลสอ", districtCode: "19" },
                    { name: "สีคิ้ว", districtCode: "20" },
                    { name: "ปากช่อง", districtCode: "21" },
                    { name: "หนองบุญมาก", districtCode: "22" },
                    { name: "แก้งสนามนาง", districtCode: "23" },
                    { name: "โนนแดง", districtCode: "24" },
                    { name: "วังน้ำเขียว", districtCode: "25" },
                    { name: "เทพารักษ์", districtCode: "26" },
                    { name: "เมืองยาง", districtCode: "27" },
                    { name: "พระทองคำ", districtCode: "28" },
                    { name: "ลำทะเมนชัย", districtCode: "29" },
                    { name: "บัวลาย", districtCode: "30" },
                    { name: "สีดา", districtCode: "31" },
                    { name: "เฉลิมพระเกียรติ", districtCode: "32" },
                    { name: "กิ่งอำเภอเขาใหญ่", districtCode: "33" },
                    { name: "กิ่งอำเภอนครจันทึก", districtCode: "34" },
                    { name: "กิ่งอำเภอวังเพชร", districtCode: "35" },
                    { name: "กิ่งอำเภอห้วยบง", districtCode: "36" }
                ]
            },
            {
                name: "บุรีรัมย์",
                id: "province-buriram",
                provinceCode: "31",
                districts: [
                    { name: "เมืองบุรีรัมย์", districtCode: "1" },
                    { name: "คูเมือง", districtCode: "2" },
                    { name: "กระสัง", districtCode: "3" },
                    { name: "นางรอง", districtCode: "4" },
                    { name: "หนองกี่", districtCode: "5" },
                    { name: "ละหานทราย", districtCode: "6" },
                    { name: "ประโคนชัย", districtCode: "7" },
                    { name: "บ้านกรวด", districtCode: "8" },
                    { name: "พุทไธสง", districtCode: "9" },
                    { name: "ลำปลายมาศ", districtCode: "10" },
                    { name: "สตึก", districtCode: "11" },
                    { name: "ปะคำ", districtCode: "12" },
                    { name: "นาโพธิ์", districtCode: "13" },
                    { name: "หนองหงส์", districtCode: "14" },
                    { name: "พลับพลาชัย", districtCode: "15" },
                    { name: "ห้วยราช", districtCode: "16" },
                    { name: "โนนสุวรรณ", districtCode: "17" },
                    { name: "ชำนิ", districtCode: "18" },
                    { name: "บ้านใหม่ไชยพจน์", districtCode: "19" },
                    { name: "โนนดินแดง", districtCode: "20" },
                    { name: "บ้านด่าน", districtCode: "21" },
                    { name: "แคนดง", districtCode: "22" },
                    { name: "เฉลิมพระเกียรติ", districtCode: "23" },
                    { name: "กิ่งอำเภอปราสามเมืองต่ำ", districtCode: "24" }
                ]
            },
            {
                name: "สุรินทร์",
                id: "province-surin",
                provinceCode: "32",
                districts: [
                    { name: "เมืองสุรินทร์", districtCode: "1" },
                    { name: "ชุมพลบุรี", districtCode: "2" },
                    { name: "ท่าตูม", districtCode: "3" },
                    { name: "จอมพระ", districtCode: "4" },
                    { name: "ปราสาท", districtCode: "5" },
                    { name: "กาบเชิง", districtCode: "6" },
                    { name: "รัตนบุรี", districtCode: "7" },
                    { name: "สนม", districtCode: "8" },
                    { name: "ศีขรภูมิ", districtCode: "9" },
                    { name: "สังขะ", districtCode: "10" },
                    { name: "ลำดวน", districtCode: "11" },
                    { name: "สำโรงทาบ", districtCode: "12" },
                    { name: "บัวเชด", districtCode: "13" },
                    { name: "พนมดงรัก", districtCode: "14" },
                    { name: "ศรีณรงค์", districtCode: "15" },
                    { name: "เขวาสินรินทร์", districtCode: "16" },
                    { name: "โนนนารายณ์", districtCode: "17" }
                ]
            },
            {
                name: "ศรีสะเกษ",
                id: "province-sisaket",
                provinceCode: "33",
                districts: [
                    { name: "เมืองศรีสะเกษ", districtCode: "1" },
                    { name: "ยางชุมน้อย", districtCode: "2" },
                    { name: "กันทรารมย์", districtCode: "3" },
                    { name: "กันทรลักษ์", districtCode: "4" },
                    { name: "ขุขันธ์", districtCode: "5" },
                    { name: "ไพรบึง", districtCode: "6" },
                    { name: "ปรางค์กู่", districtCode: "7" },
                    { name: "ขุนหาญ", districtCode: "8" },
                    { name: "ราษีไศล", districtCode: "9" },
                    { name: "อุทุมพรพิสัย", districtCode: "10" },
                    { name: "บึงบูรพ์", districtCode: "11" },
                    { name: "ห้วยทับทัน", districtCode: "12" },
                    { name: "โนนคูณ", districtCode: "13" },
                    { name: "ศรีรัตนะ", districtCode: "14" },
                    { name: "น้ำเกลี้ยง", districtCode: "15" },
                    { name: "วังหิน", districtCode: "16" },
                    { name: "ภูสิงห์", districtCode: "17" },
                    { name: "เมืองจันทร์", districtCode: "18" },
                    { name: "เบญจลักษ์", districtCode: "19" },
                    { name: "พยุห์", districtCode: "20" },
                    { name: "โพธิ์ศรีสุวรรณ", districtCode: "21" },
                    { name: "ศิลาลาด", districtCode: "22" },
                    { name: "กิ่งอำเภอทับทิมสยาม", districtCode: "23" },
                    { name: "กิ่งอำเภอเขาพระวิหาร", districtCode: "24" },
                    { name: "กิ่งอำเภอเขาพระวิหาร", districtCode: "25" }
                ]
            },
            {
                name: "อุบลราชธานี",
                id: "province-ubonratchathani",
                provinceCode: "34",
                districts: [
                    { name: "เมืองอุบลราชธานี", districtCode: "1" },
                    { name: "ศรีเมืองใหม่", districtCode: "2" },
                    { name: "โขงเจียม", districtCode: "3" },
                    { name: "เขื่องใน", districtCode: "4" },
                    { name: "เขมราฐ", districtCode: "5" },
                    // { name: "อ.เดชอุดม", districtCode: "6" }, // ข้อมูลจากตารางข้าม districtCode 6 ไป
                    { name: "เดชอุดม", districtCode: "7" },
                    { name: "นาจะหลวย", districtCode: "8" },
                    { name: "น้ำยืน", districtCode: "9" },
                    { name: "บุณฑริก", districtCode: "10" },
                    { name: "ตระการพืชผล", districtCode: "11" },
                    { name: "กุดข้าวปุ้น", districtCode: "12" },
                    // { name: "อ.ม่วงสามสิบ", districtCode: "13" }, // ข้อมูลจากตารางข้าม districtCode 13 ไป
                    { name: "ม่วงสามสิบ", districtCode: "14" },
                    { name: "วารินชำราบ", districtCode: "15" },
                    // { name: "อ.พิบูลมังสาหาร", districtCode: "16" }, // ข้อมูลจากตารางข้าม 16, 17, 18 ไป
                    // { name: "อ.พิบูลมังสาหาร", districtCode: "17" },
                    // { name: "อ.พิบูลมังสาหาร", districtCode: "18" },
                    { name: "พิบูลมังสาหาร", districtCode: "19" },
                    { name: "ตาลสุม", districtCode: "20" },
                    { name: "โพธิ์ไทร", districtCode: "21" },
                    { name: "สำโรง", districtCode: "22" },
                    // { name: "อ.ดอนมดแดง", districtCode: "23" }, // ข้อมูลจากตารางข้าม 23 ไป
                    { name: "ดอนมดแดง", districtCode: "24" },
                    { name: "สิรินธร", districtCode: "25" },
                    { name: "ทุ่งศรีอุดม", districtCode: "26" },
                    // { name: "อ.นาเยีย", districtCode: "27" }, // ข้อมูลจากตารางข้าม 27, 28 ไป
                    // { name: "อ.นาเยีย", districtCode: "28" },
                    { name: "นาเยีย", districtCode: "29" },
                    { name: "นาตาล", districtCode: "30" },
                    { name: "เหล่าเสือโก้ก", districtCode: "31" },
                    { name: "สว่างวีระวงศ์", districtCode: "32" },
                    { name: "น้ำขุ่น", districtCode: "33" }
                ]
            },
            {
                name: "ยโสธร",
                id: "province-yasothon",
                provinceCode: "35",
                districts: [
                    { name: "เมืองยโสธร", districtCode: "1" },
                    { name: "ทรายมูล", districtCode: "2" },
                    { name: "กุดชุม", districtCode: "3" },
                    { name: "คำเขื่อนแก้ว", districtCode: "4" },
                    { name: "ป่าติ้ว", districtCode: "5" },
                    { name: "มหาชนะชัย", districtCode: "6" },
                    { name: "ค้อวัง", districtCode: "7" },
                    { name: "เลิงนกทา", districtCode: "8" },
                    { name: "ไทยเจริญ", districtCode: "9" },
                    { name: "กิ่งอำเภอบดินรเดชา", districtCode: "10" }
                ]
            },
            {
                name: "ชัยภูมิ",
                id: "province-chaiyaphum",
                provinceCode: "36",
                districts: [
                    { name: "เมืองชัยภูมิ", districtCode: "1" },
                    { name: "บ้านเขว้า", districtCode: "2" },
                    { name: "คอนสวรรค์", districtCode: "3" },
                    { name: "เกษตรสมบูรณ์", districtCode: "4" },
                    { name: "หนองบัวแดง", districtCode: "5" },
                    { name: "จัตุรัส", districtCode: "6" },
                    { name: "บำเหน็จณรงค์", districtCode: "7" },
                    { name: "หนองบัวระเหว", districtCode: "8" },
                    { name: "เทพสถิต", districtCode: "9" },
                    { name: "ภูเขียว", districtCode: "10" },
                    { name: "บ้านแท่น", districtCode: "11" },
                    { name: "แก้งคร้อ", districtCode: "12" },
                    { name: "คอนสาร", districtCode: "13" },
                    { name: "ภักดีชุมพล", districtCode: "14" },
                    { name: "เนินสง่า", districtCode: "15" },
                    { name: "ซับใหญ่", districtCode: "16" },
                    { name: "กิ่งอำเภอภูผาทอง", districtCode: "17" }
                ]
            },
            {
                name: "อำนาจเจริญ",
                id: "province-amnatcharoen",
                provinceCode: "37",
                districts: [
                    { name: "เมืองอำนาจเจริญ", districtCode: "1" },
                    { name: "ชานุมาน", districtCode: "2" },
                    { name: "ปทุมราชวงศา", districtCode: "3" },
                    { name: "พนา", districtCode: "4" },
                    { name: "เสนางคนิคม", districtCode: "5" },
                    { name: "หัวตะพาน", districtCode: "6" },
                    { name: "ลืออำนาจ", districtCode: "7" }
                ]
            },
            {
                name: "บึงกาฬ",
                id: "province-buengkan",
                provinceCode: "38",
                districts: [
                    { name: "เมืองบึงกาฬ", districtCode: "1" },
                    { name: "พรเจริญ", districtCode: "2" },
                    { name: "โซ่พิสัย", districtCode: "3" },
                    { name: "เซกา", districtCode: "4" },
                    { name: "ปากคาด", districtCode: "5" },
                    { name: "บึงโขงหลง", districtCode: "6" },
                    { name: "ศรีวิไล", districtCode: "7" },
                    { name: "บุ่งคล้า", districtCode: "8" }
                ]
            },
            {
                name: "หนองบัวลำภู",
                id: "province-nongbualamphu",
                provinceCode: "39",
                districts: [
                    { name: "เมืองหนองบัวลำภู", districtCode: "1" },
                    { name: "นากลาง", districtCode: "2" },
                    { name: "โนนสัง", districtCode: "3" },
                    { name: "ศรีบุญเรือง", districtCode: "4" },
                    { name: "สุวรรณคูหา", districtCode: "5" },
                    { name: "นาวัง", districtCode: "6" },
                    { name: "กิ่งอำเภอกุดดินจี่", districtCode: "7" },
                    { name: "กิ่งอำเภอยางหล่อ", districtCode: "8" },
                    { name: "กิ่งอำเภอหัวนา", districtCode: "9" }
                ]
            },
            {
                name: "ขอนแก่น",
                id: "province-khonkaen",
                provinceCode: "40",
                districts: [
                    { name: "อ.เมืองขอนแก่น", districtCode: "1" },
                    { name: "อ.บ้านฝาง", districtCode: "2" },
                    { name: "อ.พระยืน", districtCode: "3" },
                    { name: "อ.หนองเรือ", districtCode: "4" },
                    { name: "อ.ชุมแพ", districtCode: "5" },
                    { name: "อ.สีชมพู", districtCode: "6" },
                    { name: "อ.น้ำพอง", districtCode: "7" },
                    { name: "อ.อุบลรัตน์", districtCode: "8" },
                    { name: "อ.กระนวน", districtCode: "9" },
                    { name: "อ.บ้านไผ่", districtCode: "10" },
                    { name: "อ.เปือยน้อย", districtCode: "11" },
                    { name: "อ.พล", districtCode: "12" },
                    { name: "อ.แวงใหญ่", districtCode: "13" },
                    { name: "อ.แวงน้อย", districtCode: "14" },
                    { name: "อ.หนองสองห้อง", districtCode: "15" },
                    { name: "อ.ภูเวียง", districtCode: "16" },
                    { name: "อ.มัญจาคีรี", districtCode: "17" },
                    { name: "อ.ชนบท", districtCode: "18" },
                    { name: "อ.เขาสวนกวาง", districtCode: "19" },
                    { name: "อ.ภูผาม่าน", districtCode: "20" },
                    { name: "อ.ซำสูง", districtCode: "21" },
                    { name: "อ.โคกโพธิ์ไชย", districtCode: "22" },
                    { name: "อ.หนองนาคำ", districtCode: "23" },
                    { name: "อ.บ้านแฮด", districtCode: "24" },
                    { name: "อ.โนนศิลา", districtCode: "25" },
                    { name: "อ.กิ่งอำเภอภูคำน้อย", districtCode: "26" },
                    { name: "อ.กิ่งอำเภอหนองแก", districtCode: "27" },
                    { name: "อ.กิ่งอำเภอโนนหัน", districtCode: "28" },
                    { name: "อ.เวียงเก่า", districtCode: "29" }
                ]
            },
            {
                name: "อุดรธานี",
                id: "province-udonthani",
                provinceCode: "41",
                districts: [
                    { name: "อ.เมืองอุดรธานี", districtCode: "1" },
                    { name: "อ.กุดจับ", districtCode: "2" },
                    { name: "อ.หนองวัวซอ", districtCode: "3" },
                    { name: "อ.กุมภวาปี", districtCode: "4" },
                    { name: "อ.โนนสะอาด", districtCode: "5" },
                    { name: "อ.หนองหาน", districtCode: "6" },
                    { name: "อ.ทุ่งฝน", districtCode: "7" },
                    { name: "อ.ไชยวาน", districtCode: "8" },
                    { name: "อ.ศรีธาตุ", districtCode: "9" },
                    { name: "อ.วังสามหมอ", districtCode: "10" },
                    { name: "อ.บ้านดุง", districtCode: "11" },
                    { name: "อ.บ้านผือ", districtCode: "17" },
                    { name: "อ.น้ำโสม", districtCode: "18" },
                    { name: "อ.เพ็ญ", districtCode: "19" },
                    { name: "อ.สร้างคอม", districtCode: "20" },
                    { name: "อ.หนองแสง", districtCode: "21" },
                    { name: "อ.นายูง", districtCode: "22" },
                    { name: "อ.พิบูลย์รักษ์", districtCode: "23" },
                    { name: "อ.กู่แก้ว", districtCode: "24" },
                    { name: "อ.ประจักษ์ศิลปาคม", districtCode: "25" },
                    { name: "อ.กิ่งอำเภอภูพระบาท", districtCode: "26" },
                    { name: "อ.กิ่งอำเภอวังสายไหม", districtCode: "27" }
                ]
            },
            {
                name: "เลย",
                id: "province-loei",
                provinceCode: "42",
                districts: [
                    { name: "อ.เมืองเลย", districtCode: "1" },
                    { name: "อ.นาด้วง", districtCode: "2" },
                    { name: "อ.เชียงคาน", districtCode: "3" },
                    { name: "อ.ปากชม", districtCode: "4" },
                    { name: "อ.ด่านซ้าย", districtCode: "5" },
                    { name: "อ.นาแห้ว", districtCode: "6" },
                    { name: "อ.ภูเรือ", districtCode: "7" },
                    { name: "อ.ท่าลี่", districtCode: "8" },
                    { name: "อ.วังสะพุง", districtCode: "9" },
                    { name: "อ.ภูกระดึง", districtCode: "10" },
                    { name: "อ.ภูหลวง", districtCode: "11" },
                    { name: "อ.ผาขาว", districtCode: "12" },
                    { name: "อ.เอราวัณ", districtCode: "13" },
                    { name: "อ.หนองหิน", districtCode: "14" }
                ]
            },
            {
                name: "หนองคาย",
                id: "province-nongkhai",
                provinceCode: "43",
                districts: [
                    { name: "อ.เมืองหนองคาย", districtCode: "1" },
                    { name: "อ.ท่าบ่อ", districtCode: "2" },
                    { name: "อ.โพนพิสัย", districtCode: "5" },
                    { name: "อ.ศรีเชียงใหม่", districtCode: "7" },
                    { name: "อ.สังคม", districtCode: "8" },
                    { name: "อ.สระใคร", districtCode: "14" },
                    { name: "อ.เฝ้าไร่", districtCode: "15" },
                    { name: "อ.รัตนวาปี", districtCode: "16" },
                    { name: "อ.โพธิ์ตาก", districtCode: "17" },
                    { name: "อ.กิ่งอำเภอเจ็ดสี", districtCode: "19" },
                    { name: "อ.กิ่งอำเภอสามแยกสีชมภู", districtCode: "20" },
                    { name: "อ.กิ่งอำเภอหอคำ", districtCode: "21" }
                ]
            },
            {
                name: "มหาสารคาม",
                id: "province-mahasarakham",
                provinceCode: "44",
                districts: [
                    { name: "อ.เมืองมหาสารคาม", districtCode: "1" },
                    { name: "อ.แกดำ", districtCode: "2" },
                    { name: "อ.โกสุมพิสัย", districtCode: "3" },
                    { name: "อ.กันทรวิชัย", districtCode: "4" },
                    { name: "อ.เชียงยืน", districtCode: "5" },
                    { name: "อ.บรบือ", districtCode: "6" },
                    { name: "อ.นาเชือก", districtCode: "7" },
                    { name: "อ.พยัคฆภูมิพิสัย", districtCode: "8" },
                    { name: "อ.วาปีปทุม", districtCode: "9" },
                    { name: "อ.นาดูน", districtCode: "10" },
                    { name: "อ.ยางสีสุราช", districtCode: "11" },
                    { name: "อ.กุดรัง", districtCode: "12" },
                    { name: "อ.ชื่นชม", districtCode: "13" }
                ]
            },
            {
                name: "ร้อยเอ็ด",
                id: "province-roiet",
                provinceCode: "45",
                districts: [
                    { name: "อ.เมืองร้อยเอ็ด", districtCode: "1" },
                    { name: "อ.เกษตรวิสัย", districtCode: "2" },
                    { name: "อ.ปทุมรัตต์", districtCode: "3" },
                    { name: "อ.จตุรพักตรพิมาน", districtCode: "4" },
                    { name: "อ.ธวัชบุรี", districtCode: "5" },
                    { name: "อ.พนมไพร", districtCode: "6" },
                    { name: "อ.โพนทอง", districtCode: "7" },
                    { name: "อ.โพธิ์ชัย", districtCode: "8" },
                    { name: "อ.หนองพอก", districtCode: "9" },
                    { name: "อ.เสลภูมิ", districtCode: "10" },
                    { name: "อ.สุวรรณภูมิ", districtCode: "11" },
                    { name: "อ.เมืองสรวง", districtCode: "12" },
                    { name: "อ.โพนทราย", districtCode: "13" },
                    { name: "อ.อาจสามารถ", districtCode: "14" },
                    { name: "อ.เมยวดี", districtCode: "15" },
                    { name: "อ.ศรีสมเด็จ", districtCode: "16" },
                    { name: "อ.จังหาร", districtCode: "17" },
                    { name: "อ.เชียงขวัญ", districtCode: "18" },
                    { name: "อ.หนองฮี", districtCode: "19" },
                    { name: "อ.ทุ่งเขาหลวง", districtCode: "20" },
                    { name: "อ.กิ่งอำเภอหนองบัวบูรพา", districtCode: "21" }
                ]
            },
            {
                name: "กาฬสินธุ์",
                id: "province-kalasin",
                provinceCode: "46",
                districts: [
                    { name: "อ.เมืองกาฬสินธุ์", districtCode: "1" },
                    { name: "อ.นามน", districtCode: "2" },
                    { name: "อ.กมลาไสย", districtCode: "3" },
                    { name: "อ.ร่องคำ", districtCode: "4" },
                    { name: "อ.กุฉินารายณ์", districtCode: "5" },
                    { name: "อ.เขาวง", districtCode: "6" },
                    { name: "อ.ยางตลาด", districtCode: "7" },
                    { name: "อ.ห้วยเม็ก", districtCode: "8" },
                    { name: "อ.สหัสขันธ์", districtCode: "9" },
                    { name: "อ.คำม่วง", districtCode: "10" },
                    { name: "อ.ท่าคันโท", districtCode: "11" },
                    { name: "อ.หนองกุงศรี", districtCode: "12" },
                    { name: "อ.สมเด็จ", districtCode: "13" },
                    { name: "อ.ห้วยผึ้ง", districtCode: "14" },
                    { name: "อ.สามชัย", districtCode: "15" },
                    { name: "อ.นาคู", districtCode: "16" },
                    { name: "อ.ดอนจาน", districtCode: "17" },
                    { name: "อ.ฆ้องชัย", districtCode: "18" },
                    { name: "อ.กิ่งอำเภอลำปาว", districtCode: "19" },
                    { name: "อ.กิ่งอำเภอดงมูล", districtCode: "20" },
                    { name: "อ.กิ่งอำเภอนาขาม", districtCode: "21" },
                    { name: "อ.กิ่งอำเภอเขาพระนอน", districtCode: "22" },
                    { name: "อ.กิ่งอำเภอลำน้ำดอกไม้", districtCode: "23" },
                    { name: "อ.กิ่งอำเภอคำใหญ่", districtCode: "24" }
                ]
            },
            {
                name: "สกลนคร",
                id: "province-sakonnakhon",
                provinceCode: "47",
                districts: [
                    { name: "อ.เมืองสกลนคร", districtCode: "1" },
                    { name: "อ.กุสุมาลย์", districtCode: "2" },
                    { name: "อ.กุดบาก", districtCode: "3" },
                    { name: "อ.พรรณานิคม", districtCode: "4" },
                    { name: "อ.พังโคน", districtCode: "5" },
                    { name: "อ.วาริชภูมิ", districtCode: "6" },
                    { name: "อ.นิคมน้ำอูน", districtCode: "7" },
                    { name: "อ.วานรนิวาส", districtCode: "8" },
                    { name: "อ.คำตากล้า", districtCode: "9" },
                    { name: "อ.บ้านม่วง", districtCode: "10" },
                    { name: "อ.อากาศอำนวย", districtCode: "11" },
                    { name: "อ.สว่างแดนดิน", districtCode: "12" },
                    { name: "อ.ส่องดาว", districtCode: "13" },
                    { name: "อ.เต่างอย", districtCode: "14" },
                    { name: "อ.โคกศรีสุพรรณ", districtCode: "15" },
                    { name: "อ.เจริญศิลป์", districtCode: "16" },
                    { name: "อ.โพนนาแก้ว", districtCode: "17" },
                    { name: "อ.ภูพาน", districtCode: "18" },
                    { name: "อ.กิ่งอำเภอห้วยไร่", districtCode: "19" }
                ]
            },
            {
                name: "นครพนม",
                id: "province-nakhonphanom",
                provinceCode: "48",
                districts: [
                    { name: "อ.เมืองนครพนม", districtCode: "1" },
                    { name: "อ.ปลาปาก", districtCode: "2" },
                    { name: "อ.ท่าอุเทน", districtCode: "3" },
                    { name: "อ.บ้านแพง", districtCode: "4" },
                    { name: "อ.ธาตุพนม", districtCode: "5" },
                    { name: "อ.เรณูนคร", districtCode: "6" },
                    { name: "อ.นาแก", districtCode: "7" },
                    { name: "อ.ศรีสงคราม", districtCode: "8" },
                    { name: "อ.นาหว้า", districtCode: "9" },
                    { name: "อ.โพนสวรรค์", districtCode: "10" },
                    { name: "อ.นาทม", districtCode: "11" },
                    { name: "อ.วังยาง", districtCode: "12" }
                ]
            },
            {
                name: "มุกดาหาร",
                id: "province-mukdahan",
                provinceCode: "49",
                districts: [
                    { name: "อ.เมืองมุกดาหาร", districtCode: "1" },
                    { name: "อ.นิคมคำสร้อย", districtCode: "2" },
                    { name: "อ.ดอนตาล", districtCode: "3" },
                    { name: "อ.ดงหลวง", districtCode: "4" },
                    { name: "อ.คำชะอี", districtCode: "5" },
                    { name: "อ.หว้านใหญ่", districtCode: "6" },
                    { name: "อ.หนองสูง", districtCode: "7" }
                ]
            }
        ]
    },
    {
        name: "ภาคตะวันออก", id: "region-east", provinces:
            [
                {
                    name: "ชลบุรี",
                    id: "province-chonburi",
                    provinceCode: "20",
                    districts: [
                        { name: "อ.เมืองชลบุรี", districtCode: "1" },
                        { name: "อ.บ้านบึง", districtCode: "2" },
                        { name: "อ.หนองใหญ่", districtCode: "3" },
                        { name: "อ.บางละมุง", districtCode: "4" },
                        { name: "อ.พานทอง", districtCode: "5" },
                        { name: "อ.พนัสนิคม", districtCode: "6" },
                        { name: "อ.ศรีราชา", districtCode: "7" },
                        { name: "อ.เกาะสีชัง", districtCode: "8" },
                        { name: "อ.สัตหีบ", districtCode: "9" },
                        { name: "อ.บ่อทอง", districtCode: "10" },
                        { name: "อ.เกาะจันทร์", districtCode: "11" }
                    ]
                },
                {
                    name: "ระยอง",
                    id: "province-rayong",
                    provinceCode: "21",
                    districts: [
                        { name: "อ.เมืองระยอง", districtCode: "1" },
                        { name: "อ.บ้านฉาง", districtCode: "2" },
                        { name: "อ.แกลง", districtCode: "3" },
                        { name: "อ.วังจันทร์", districtCode: "4" },
                        { name: "อ.บ้านค่าย", districtCode: "5" },
                        { name: "อ.ปลวกแดง", districtCode: "6" },
                        { name: "อ.เขาชะเมา", districtCode: "7" },
                        { name: "อ.นิคมพัฒนา", districtCode: "8" }
                    ]
                },
                {
                    name: "จันทบุรี",
                    id: "province-chanthaburi",
                    provinceCode: "22",
                    districts: [
                        { name: "อ.เมืองจันทบุรี", districtCode: "1" },
                        { name: "อ.ขลุง", districtCode: "2" },
                        { name: "อ.ท่าใหม่", districtCode: "3" },
                        { name: "อ.โป่งน้ำร้อน", districtCode: "4" },
                        { name: "อ.มะขาม", districtCode: "5" },
                        { name: "อ.แหลมสิงห์", districtCode: "6" },
                        { name: "อ.สอยดาว", districtCode: "7" },
                        { name: "อ.แก่งหางแมว", districtCode: "8" },
                        { name: "อ.นายายอาม", districtCode: "9" },
                        { name: "อ.เขาคิชฌกูฏ", districtCode: "10" }
                    ]
                },
                {
                    name: "ตราด",
                    id: "province-trat",
                    provinceCode: "23",
                    districts: [
                        { name: "อ.เมืองตราด", districtCode: "1" },
                        { name: "อ.คลองใหญ่", districtCode: "2" },
                        { name: "อ.เขาสมิง", districtCode: "3" },
                        { name: "อ.บ่อไร่", districtCode: "4" },
                        { name: "อ.แหลมงอบ", districtCode: "5" },
                        { name: "อ.เกาะกูด", districtCode: "6" },
                        { name: "อ.เกาะช้าง", districtCode: "7" }
                    ]
                },
                {
                    name: "ฉะเชิงเทรา",
                    id: "province-chachoengsao",
                    provinceCode: "24",
                    districts: [
                        { name: "อ.เมืองฉะเชิงเทรา", districtCode: "1" },
                        { name: "อ.บางคล้า", districtCode: "2" },
                        { name: "อ.บางน้ำเปรี้ยว", districtCode: "3" },
                        { name: "อ.บางปะกง", districtCode: "4" },
                        { name: "อ.บ้านโพธิ์", districtCode: "5" },
                        { name: "อ.พนมสารคาม", districtCode: "6" },
                        { name: "อ.ราชสาส์น", districtCode: "7" },
                        { name: "อ.สนามชัยเขต", districtCode: "8" },
                        { name: "อ.แปลงยาว", districtCode: "9" },
                        { name: "อ.ท่าตะเกียบ", districtCode: "10" },
                        { name: "อ.คลองเขื่อน", districtCode: "11" }
                    ]
                },
                {
                    name: "ปราจีนบุรี",
                    id: "province-prachinburi",
                    provinceCode: "25",
                    districts: [
                        { name: "อ.เมืองปราจีนบุรี", districtCode: "1" },
                        { name: "อ.กบินทร์บุรี", districtCode: "2" },
                        { name: "อ.นาดี", districtCode: "3" },
                        { name: "อ.บ้านสร้าง", districtCode: "6" },
                        { name: "อ.ประจันตคาม", districtCode: "7" },
                        { name: "อ.ศรีมหาโพธิ", districtCode: "8" },
                        { name: "อ.ศรีมโหสถ", districtCode: "9" }
                    ]
                },
                {
                    name: "สระแก้ว",
                    id: "province-sakaeo",
                    provinceCode: "27",
                    districts: [
                        { name: "อ.เมืองสระแก้ว", districtCode: "1" },
                        { name: "อ.คลองหาด", districtCode: "2" },
                        { name: "อ.ตาพระยา", districtCode: "3" },
                        { name: "อ.วังน้ำเย็น", districtCode: "4" },
                        { name: "อ.วัฒนานคร", districtCode: "5" },
                        { name: "อ.อรัญประเทศ", districtCode: "6" },
                        { name: "อ.เขาฉกรรจ์", districtCode: "7" },
                        { name: "อ.โคกสูง", districtCode: "8" },
                        { name: "อ.วังสมบูรณ์", districtCode: "9" }
                    ]
                },
                {
                    name: "ตาก",
                    id: "province-tak",
                    provinceCode: "63",
                    districts: [
                        { name: "อ.เมืองตาก", districtCode: "1" },
                        { name: "อ.บ้านตาก", districtCode: "2" },
                        { name: "อ.สามเงา", districtCode: "3" },
                        { name: "อ.แม่ระมาด", districtCode: "4" },
                        { name: "อ.ท่าสองยาง", districtCode: "5" },
                        { name: "อ.แม่สอด", districtCode: "6" },
                        { name: "อ.พบพระ", districtCode: "7" },
                        { name: "อ.อุ้มผาง", districtCode: "8" },
                        { name: "อ.วังเจ้า", districtCode: "9" },
                        { name: "อ.กิ่งอำเภอวังประจบ", districtCode: "10" },
                        { name: "อ.กิ่งอำเภอด่านแม่ละเมา", districtCode: "11" }
                    ]
                },
                {
                    name: "ราชบุรี",
                    id: "province-ratchaburi",
                    provinceCode: "70",
                    districts: [
                        { name: "อ.เมืองราชบุรี", districtCode: "1" },
                        { name: "อ.จอมบึง", districtCode: "2" },
                        { name: "อ.สวนผึ้ง", districtCode: "3" },
                        { name: "อ.ดำเนินสะดวก", districtCode: "4" },
                        { name: "อ.บ้านโป่ง", districtCode: "5" },
                        { name: "อ.บางแพ", districtCode: "6" },
                        { name: "อ.โพธาราม", districtCode: "7" },
                        { name: "อ.ปากท่อ", districtCode: "8" },
                        { name: "อ.วัดเพลง", districtCode: "9" },
                        { name: "อ.บ้านคา", districtCode: "10" }
                    ]
                },
                {
                    name: "กาญจนบุรี",
                    id: "province-kanchanaburi",
                    provinceCode: "71",
                    districts: [
                        { name: "อ.เมืองกาญจนบุรี", districtCode: "1" },
                        { name: "อ.ไทรโยค", districtCode: "2" },
                        { name: "อ.บ่อพลอย", districtCode: "3" },
                        { name: "อ.ศรีสวัสดิ์", districtCode: "4" },
                        { name: "อ.ท่ามะกา", districtCode: "5" },
                        { name: "อ.ท่าม่วง", districtCode: "6" },
                        { name: "อ.ทองผาภูมิ", districtCode: "7" },
                        { name: "อ.สังขละบุรี", districtCode: "8" },
                        { name: "อ.พนมทวน", districtCode: "9" },
                        { name: "อ.เลาขวัญ", districtCode: "10" },
                        { name: "อ.ด่านมะขามเตี้ย", districtCode: "11" },
                        { name: "อ.หนองปรือ", districtCode: "12" },
                        { name: "อ.ห้วยกระเจา", districtCode: "13" }
                    ]
                },
                {
                    name: "เพชรบุรี",
                    id: "province-phetchaburi",
                    provinceCode: "76",
                    districts: [
                        { name: "อ.เมืองเพชรบุรี", districtCode: "1" },
                        { name: "อ.เขาย้อย", districtCode: "2" },
                        { name: "อ.หนองหญ้าปล้อง", districtCode: "3" },
                        { name: "อ.ชะอำ", districtCode: "4" },
                        { name: "อ.ท่ายาง", districtCode: "5" },
                        { name: "อ.บ้านลาด", districtCode: "6" },
                        { name: "อ.บ้านแหลม", districtCode: "7" },
                        { name: "อ.แก่งกระจาน", districtCode: "8" }
                    ]
                },
                {
                    name: "ประจวบคีรีขันธ์",
                    id: "province-prachuap-khiri-khan",
                    provinceCode: "77",
                    districts: [
                        { name: "อ.เมืองประจวบคีรีขันธ์", districtCode: "1" },
                        { name: "อ.กุยบุรี", districtCode: "2" },
                        { name: "อ.ทับสะแก", districtCode: "3" },
                        { name: "อ.บางสะพาน", districtCode: "4" },
                        { name: "อ.บางสะพานน้อย", districtCode: "5" },
                        { name: "อ.ปราณบุรี", districtCode: "6" },
                        { name: "อ.หัวหิน", districtCode: "7" },
                        { name: "อ.สามร้อยยอด", districtCode: "8" }
                    ]
                }]
    },
    {
        name: "ภาคใต้", id: "region-south", provinces: [
            {
                name: "นครศรีธรรมราช",
                id: "province-nakhon-si-thammarat",
                provinceCode: "80",
                districts: [
                    { name: "อ.เมืองนครศรีธรรมราช", districtCode: "1" },
                    { name: "อ.พรหมคีรี", districtCode: "2" },
                    { name: "อ.ลานสกา", districtCode: "3" },
                    { name: "อ.ฉวาง", districtCode: "4" },
                    { name: "อ.พิปูน", districtCode: "5" },
                    { name: "อ.เชียรใหญ่", districtCode: "6" },
                    { name: "อ.ชะอวด", districtCode: "7" },
                    { name: "อ.ท่าศาลา", districtCode: "8" },
                    { name: "อ.ทุ่งสง", districtCode: "9" },
                    { name: "อ.นาบอน", districtCode: "10" },
                    { name: "อ.ทุ่งใหญ่", districtCode: "11" },
                    { name: "อ.ปากพนัง", districtCode: "12" },
                    { name: "อ.ร่อนพิบูลย์", districtCode: "13" },
                    { name: "อ.สิชล", districtCode: "14" },
                    { name: "อ.ขนอม", districtCode: "15" },
                    { name: "อ.หัวไทร", districtCode: "16" },
                    { name: "อ.บางขัน", districtCode: "17" },
                    { name: "อ.ถ้ำพรรณรา", districtCode: "18" },
                    { name: "อ.จุฬาภรณ์", districtCode: "19" },
                    { name: "อ.พระพรหม", districtCode: "20" },
                    { name: "อ.นบพิตำ", districtCode: "21" },
                    { name: "อ.ช้างกลาง", districtCode: "22" },
                    { name: "อ.เฉลิมพระเกียรติ", districtCode: "23" },
                    { name: "อ.กิ่งอำเภอกะปาง", districtCode: "24" },
                    { name: "อ.กิ่งอำเภอราษฎร์ภักดี", districtCode: "25" },
                    { name: "อ.กิ่งอำเภอกลาย", districtCode: "26" },
                    { name: "อ.กิ่งอำเภอนาหลวง", districtCode: "27" }
                ]
            },
            {
                name: "กระบี่",
                id: "province-krabi",
                provinceCode: "81",
                districts: [
                    { name: "อ.เมืองกระบี่", districtCode: "1" },
                    { name: "อ.เขาพนม", districtCode: "2" },
                    { name: "อ.เกาะลันตา", districtCode: "3" },
                    { name: "อ.คลองท่อม", districtCode: "4" },
                    { name: "อ.อ่าวลึก", districtCode: "5" },
                    { name: "อ.ปลายพระยา", districtCode: "6" },
                    { name: "อ.ลำทับ", districtCode: "7" },
                    { name: "อ.เหนือคลอง", districtCode: "8" }
                ]
            },
            {
                name: "พังงา",
                id: "province-phangnga",
                provinceCode: "82",
                districts: [
                    { name: "อ.เมืองพังงา", districtCode: "1" },
                    { name: "อ.เกาะยาว", districtCode: "2" },
                    { name: "อ.กะปง", districtCode: "3" },
                    { name: "อ.ตะกั่วทุ่ง", districtCode: "4" },
                    { name: "อ.ตะกั่วป่า", districtCode: "5" },
                    { name: "อ.คุระบุรี", districtCode: "6" },
                    { name: "อ.ทับปุด", districtCode: "7" },
                    { name: "อ.ท้ายเหมือง", districtCode: "8" },
                    { name: "อ.กิ่งอำเภอโคกกลอย", districtCode: "9" }
                ]
            },
            {
                name: "ภูเก็ต",
                id: "province-phuket",
                provinceCode: "83",
                districts: [
                    { name: "อ.เมืองภูเก็ต", districtCode: "1" },
                    { name: "อ.กะทู้", districtCode: "2" },
                    { name: "อ.ถลาง", districtCode: "3" }
                ]
            },
            {
                name: "สุราษฎร์ธานี",
                id: "province-surat-thani",
                provinceCode: "84",
                districts: [
                    { name: "อ.เมืองสุราษฎร์ธานี", districtCode: "1" },
                    { name: "อ.กาญจนดิษฐ์", districtCode: "2" },
                    { name: "อ.ดอนสัก", districtCode: "3" },
                    { name: "อ.เกาะสมุย", districtCode: "4" },
                    { name: "อ.เกาะพะงัน", districtCode: "5" },
                    { name: "อ.ไชยา", districtCode: "6" },
                    { name: "อ.ท่าชนะ", districtCode: "7" },
                    { name: "อ.คีรีรัฐนิคม", districtCode: "8" },
                    { name: "อ.บ้านตาขุน", districtCode: "9" },
                    { name: "อ.พนม", districtCode: "10" },
                    { name: "อ.ท่าฉาง", districtCode: "11" },
                    { name: "อ.บ้านนาสาร", districtCode: "12" },
                    { name: "อ.บ้านนาเดิม", districtCode: "13" },
                    { name: "อ.เคียนซา", districtCode: "14" },
                    { name: "อ.เวียงสระ", districtCode: "15" },
                    { name: "อ.พระแสง", districtCode: "16" },
                    { name: "อ.พุนพิน", districtCode: "17" },
                    { name: "อ.ชัยบุรี", districtCode: "18" },
                    { name: "อ.วิภาวดี", districtCode: "19" },
                    { name: "อ.กิ่งอำเภอท่าโรงช้าง", districtCode: "20" },
                    { name: "อ.กิ่งอำเภอบางสวรรค์", districtCode: "21" }
                ]
            },
            {
                name: "ระนอง",
                id: "province-ranong",
                provinceCode: "85",
                districts: [
                    { name: "อ.เมืองระนอง", districtCode: "1" },
                    { name: "อ.ละอุ่น", districtCode: "2" },
                    { name: "อ.กะเปอร์", districtCode: "3" },
                    { name: "อ.กระบุรี", districtCode: "4" },
                    { name: "อ.สุขสำราญ", districtCode: "5" }
                ]
            },
            {
                name: "ชุมพร",
                id: "province-chumphon",
                provinceCode: "86",
                districts: [
                    { name: "อ.เมืองชุมพร", districtCode: "1" },
                    { name: "อ.ท่าแซะ", districtCode: "2" },
                    { name: "อ.ปะทิว", districtCode: "3" },
                    { name: "อ.หลังสวน", districtCode: "4" },
                    { name: "อ.ละแม", districtCode: "5" },
                    { name: "อ.พะโต๊ะ", districtCode: "6" },
                    { name: "อ.สวี", districtCode: "7" },
                    { name: "อ.ทุ่งตะโก", districtCode: "8" }
                ]
            },
            {
                name: "สงขลา",
                id: "province-songkhla",
                provinceCode: "90",
                districts: [
                    { name: "อ.เมืองสงขลา", districtCode: "1" },
                    { name: "อ.สทิงพระ", districtCode: "2" },
                    { name: "อ.จะนะ", districtCode: "3" },
                    { name: "อ.นาทวี", districtCode: "4" },
                    { name: "อ.เทพา", districtCode: "5" },
                    { name: "อ.สะบ้าย้อย", districtCode: "6" },
                    { name: "อ.ระโนด", districtCode: "7" },
                    { name: "อ.กระแสสินธุ์", districtCode: "8" },
                    { name: "อ.รัตภูมิ", districtCode: "9" },
                    { name: "อ.สะเดา", districtCode: "10" },
                    { name: "อ.หาดใหญ่", districtCode: "11" },
                    { name: "อ.นาหม่อม", districtCode: "12" },
                    { name: "อ.ควนเนียง", districtCode: "13" },
                    { name: "อ.บางกล่ำ", districtCode: "14" },
                    { name: "อ.สิงหนคร", districtCode: "15" },
                    { name: "อ.คลองหอยโข่ง", districtCode: "16" }
                ]
            },
            {
                name: "สตูล",
                id: "province-satun",
                provinceCode: "91",
                districts: [
                    { name: "อ.เมืองสตูล", districtCode: "1" },
                    { name: "อ.ควนโดน", districtCode: "2" },
                    { name: "อ.ควนกาหลง", districtCode: "3" },
                    { name: "อ.ท่าแพ", districtCode: "4" },
                    { name: "อ.ละงู", districtCode: "5" },
                    { name: "อ.ทุ่งหว้า", districtCode: "6" },
                    { name: "อ.มะนัง", districtCode: "7" }
                ]
            },
            {
                name: "ตรัง",
                id: "province-trang",
                provinceCode: "92",
                districts: [
                    { name: "อ.เมืองตรัง", districtCode: "1" },
                    { name: "อ.กันตัง", districtCode: "2" },
                    { name: "อ.ย่านตาขาว", districtCode: "3" },
                    { name: "อ.ปะเหลียน", districtCode: "4" },
                    { name: "อ.สิเกา", districtCode: "5" },
                    { name: "อ.ห้วยยอด", districtCode: "6" },
                    { name: "อ.วังวิเศษ", districtCode: "7" },
                    { name: "อ.นาโยง", districtCode: "8" },
                    { name: "อ.รัษฎา", districtCode: "9" },
                    { name: "อ.หาดสำราญ", districtCode: "10" },
                    { name: "อ.กิ่งอำเภอบางดี่", districtCode: "11" },
                    { name: "อ.กิ่งอำเภอนาวัง", districtCode: "12" }
                ]
            },
            {
                name: "พัทลุง",
                id: "province-phatthalung",
                provinceCode: "93",
                districts: [
                    { name: "อ.เมืองพัทลุง", districtCode: "1" },
                    { name: "อ.กงหรา", districtCode: "2" },
                    { name: "อ.เขาชัยสน", districtCode: "3" },
                    { name: "อ.ตะโหมด", districtCode: "4" },
                    { name: "อ.ควนขนุน", districtCode: "5" },
                    { name: "อ.ปากพะยูน", districtCode: "6" },
                    { name: "อ.ศรีบรรพต", districtCode: "7" },
                    { name: "อ.ป่าบอน", districtCode: "8" },
                    { name: "อ.บางแก้ว", districtCode: "9" },
                    { name: "อ.ป่าพะยอม", districtCode: "10" },
                    { name: "อ.ศรีนครินทร์", districtCode: "11" }
                ]
            },
            {
                name: "ปัตตานี",
                id: "province-pattani",
                provinceCode: "94",
                districts: [
                    { name: "อ.เมืองปัตตานี", districtCode: "1" },
                    { name: "อ.โคกโพธิ์", districtCode: "2" },
                    { name: "อ.หนองจิก", districtCode: "3" },
                    { name: "อ.ปะนาเระ", districtCode: "4" },
                    { name: "อ.มายอ", districtCode: "5" },
                    { name: "อ.ทุ่งยางแดง", districtCode: "6" },
                    { name: "อ.สายบุรี", districtCode: "7" },
                    { name: "อ.ไม้แก่น", districtCode: "8" },
                    { name: "อ.ยะหริ่ง", districtCode: "9" },
                    { name: "อ.ยะรัง", districtCode: "10" },
                    { name: "อ.กะพ้อ", districtCode: "11" },
                    { name: "อ.แม่ลาน", districtCode: "12" }
                ]
            },
            {
                name: "ยะลา",
                id: "province-yala",
                provinceCode: "95",
                districts: [
                    { name: "อ.เมืองยะลา", districtCode: "1" },
                    { name: "อ.เบตง", districtCode: "2" },
                    { name: "อ.บันนังสตา", districtCode: "3" },
                    { name: "อ.ธารโต", districtCode: "4" },
                    { name: "อ.ยะหา", districtCode: "5" },
                    { name: "อ.รามัน", districtCode: "6" },
                    { name: "อ.กาบัง", districtCode: "7" },
                    { name: "อ.กรงปินัง", districtCode: "8" }
                ]
            },
            {
                name: "นราธิวาส",
                id: "province-narathiwat",
                provinceCode: "96",
                districts: [
                    { name: "อ.เมืองนราธิวาส", districtCode: "1" },
                    { name: "อ.ตากใบ", districtCode: "2" },
                    { name: "อ.บาเจาะ", districtCode: "3" },
                    { name: "อ.ยี่งอ", districtCode: "4" },
                    { name: "อ.ระแงะ", districtCode: "5" },
                    { name: "อ.รือเสาะ", districtCode: "6" },
                    { name: "อ.ศรีสาคร", districtCode: "7" },
                    { name: "อ.แว้ง", districtCode: "8" },
                    { name: "อ.สุคิริน", districtCode: "9" },
                    { name: "อ.สุไหงโก-ลก", districtCode: "10" },
                    { name: "อ.สุไหงปาดี", districtCode: "11" },
                    { name: "อ.จะแนะ", districtCode: "12" },
                    { name: "อ.เจาะไอร้อง", districtCode: "13" }
                ]
            }
        ]
    }]
