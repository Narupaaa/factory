$(document).ready(function () {
    const $accordion = $('#locationAccordion');
    const diwBaseUrl = "https://userdb.diw.go.th/factoryPublic/";
    const $excelIframe = $('#excel-iframe');
    const $iframePlaceholder = $('#iframe-placeholder');
    const $searchInput = $('#searchInput');
    const $clearSearchBtn = $('#clearSearchBtn');
    const $downloadSelectedBtn = $('#downloadSelectedBtn');
    const $selectAllBtn = $('#selectAllBtn');
    const $deselectAllBtn = $('#deselectAllBtn');
    const $districtCount = $('#districtCount');
    const $totalDistricts = $('#totalDistricts');
    const $currentDistrict = $('#currentDistrict');
    const $progressBar = $('#downloadProgress');
    const $progressCount = $('#progressCount');
    const $totalCount = $('#totalCount');
    const $browseFilesBtn = $('#browseFilesBtn');
    const $progressContainer = $('.progress-container');

    // Calculate total districts
    let totalDistricts = 0;
    locationData.forEach(region => {
        region.provinces.forEach(province => {
            totalDistricts += province.districts.length;
        });
    });
    $totalDistricts.text(totalDistricts);

    // --- Function to build the Accordion ---
    function buildAccordion(dataToRender) {
        $accordion.empty();
        let hasDistricts = false;
        let visibleDistricts = 0;

        if (!dataToRender || dataToRender.length === 0) {
            $accordion.html('<div class="alert alert-info text-center mt-3"><i class="bi bi-info-circle me-2"></i>ไม่พบข้อมูลที่ตรงกับการค้นหา</div>');
            $downloadSelectedBtn.prop('disabled', true);
            $selectAllBtn.prop('disabled', true);
            $deselectAllBtn.prop('disabled', true);
            return;
        }

        dataToRender.forEach((region, regionIndex) => {
            const regionId = region.id || `region-${regionIndex}`;

            const regionItem = $(`
                <div class="region-item mb-2">
                    <div class=" d-flex justify-content-between align-items-center" 
                         data-bs-toggle="collapse" 
                         data-bs-target="#collapse-${regionId}" 
                         aria-expanded="false" 
                         aria-controls="collapse-${regionId}">
                        <div>
                            <span class="toggler-icon"></span>
                            <span class="region-name fw-medium">${region.name}</span>
                        </div>
                        <i class="bi bi-chevron-down"></i>
                    </div>
                    <div class="collapse" id="collapse-${regionId}">
                        <div class="provinces-container mt-2">
                            <!-- Provinces will be appended here -->
                        </div>
                    </div>
                </div>
            `);
            $accordion.append(regionItem);

            const $provincesContainer = regionItem.find('.provinces-container');
            if (region.provinces && region.provinces.length > 0) {
                region.provinces.forEach((province, provinceIndex) => {
                    const provinceId = province.id || `province-${regionId}-${provinceIndex}`;
                    let provinceHtml;

                    if (province.districts && province.districts.length > 0) {
                        provinceHtml = $(`
                            <div class="province-item">
                                <div class="province-header d-flex justify-content-between align-items-center" 
                                     data-bs-toggle="collapse" 
                                     data-bs-target="#collapse-${provinceId}" 
                                     aria-expanded="false" 
                                     aria-controls="collapse-${provinceId}">
                                    <div>
                                        <span class="toggler-icon"></span>
                                        <span class="province-name">${province.name}</span>
                                    </div>
                                    <i class="bi bi-chevron-down"></i>
                                </div>
                                <div class="collapse" id="collapse-${provinceId}">
                                    <div class="districts-container mt-2 ms-3">
                                        <!-- Districts will be appended here -->
                                    </div>
                                </div>
                            </div>
                        `);
                        $provincesContainer.append(provinceHtml);

                        const $districtsContainer = provinceHtml.find('.districts-container');
                        province.districts.forEach(district => {
                            const districtFileName = `${province.provinceCode}-${district.districtCode}-${district.name.trim().replace(/\s+/g, '_')}.xls`;
                            const districtEntry = $(`
                                <div class="list-group-item district-entry">
                                    <input type="checkbox" class="district-checkbox form-check-input"
                                           data-province-code="${province.provinceCode}"
                                           data-district-code="${district.districtCode}"
                                           data-filename="${districtFileName}">
                                    <span class="district-view-link"
                                          data-province-code="${province.provinceCode}"
                                          data-district-code="${district.districtCode}"
                                          title="คลิกเพื่อดูข้อมูล ${district.name.trim()}">
                                        <i class="bi bi-eye me-2 text-primary"></i>
                                        <span class="district-name">${district.name.trim()}</span>
                                    </span>
                                </div>
                            `);
                            $districtsContainer.append(districtEntry);
                            hasDistricts = true;
                            visibleDistricts++;
                        });
                    } else {
                        provinceHtml = `
                            <div class="province-item">
                                <div class="text-muted px-3 py-2">
                                    <i class="bi bi-folder me-2"></i> ${province.name} (ไม่มีข้อมูลอำเภอ)
                                </div>
                            </div>
                        `;
                        $provincesContainer.append(provinceHtml);
                    }
                });
            } else {
                $provincesContainer.html('<div class="text-muted px-3 py-2"><i class="bi bi-exclamation-circle me-2"></i>ไม่มีข้อมูลจังหวัดในภูมิภาคนี้</div>');
            }
        });

        $selectAllBtn.prop('disabled', !hasDistricts);
        $deselectAllBtn.prop('disabled', !hasDistricts);
        updateDownloadButtonState();
    }
    buildAccordion(locationData);

    // --- Update selected district count ---
    function updateSelectedCount() {
        const selectedCount = $accordion.find('.district-checkbox:checked').length;
        $districtCount.text(selectedCount);
    }

    // --- Function to update Download Button State ---
    function updateDownloadButtonState() {
        const anyChecked = $accordion.find('.district-checkbox:checked').length > 0;
        $downloadSelectedBtn.prop('disabled', !anyChecked);
    }

    // --- Event listener for Checkboxes ---
    $accordion.on('change', '.district-checkbox', function () {
        updateDownloadButtonState();
        updateSelectedCount();
    });

    // --- Select All / Deselect All ---
    $selectAllBtn.on('click', function () {
        $accordion.find('.district-checkbox:visible').prop('checked', true);
        updateDownloadButtonState();
        updateSelectedCount();
    });

    $deselectAllBtn.on('click', function () {
        $accordion.find('.district-checkbox').prop('checked', false);
        updateDownloadButtonState();
        updateSelectedCount();
    });

    // --- Search Functionality ---
    $searchInput.on('keyup', function () {
        const searchTerm = $(this).val().toLowerCase().trim();

        if (searchTerm === "") {
            buildAccordion(locationData);
            $('.collapse').removeClass('show');
            updateDownloadButtonState();
            updateSelectedCount();
            return;
        }

        const filteredData = locationData.map(region => {
            const regionNameMatches = region.name.toLowerCase().includes(searchTerm);
            const filteredProvinces = region.provinces ? region.provinces.map(province => {
                const provinceNameMatches = province.name.toLowerCase().includes(searchTerm);
                const filteredDistricts = province.districts ? province.districts.filter(district =>
                    district.name.toLowerCase().includes(searchTerm)
                ) : [];
                if (provinceNameMatches || filteredDistricts.length > 0) {
                    return { ...province, districts: filteredDistricts };
                }
                return null;
            }).filter(p => p !== null) : [];

            if (regionNameMatches || filteredProvinces.length > 0) {
                return { ...region, provinces: filteredProvinces };
            }
            return null;
        }).filter(r => r !== null);

        buildAccordion(filteredData);

        if (searchTerm) {
            $accordion.find('.region-name, .province-name, .district-name').each(function () {
                const $element = $(this);
                const originalText = $element.text();
                if (originalText.toLowerCase().includes(searchTerm)) {
                    $element.html(originalText.replace(new RegExp(searchTerm, 'gi'), '<span class="search-highlight">$&</span>'));
                }
            });

            $('.region-item, .province-item').each(function () {
                const $element = $(this);
                if ($element.find('.search-highlight').length > 0) {
                    $element.find('.collapse').addClass('show');
                }
            });
        }
        updateDownloadButtonState();
        updateSelectedCount();
    });

    $clearSearchBtn.on('click', function () {
        $searchInput.val('').trigger('keyup');
        $excelIframe.attr('src', 'about:blank').hide();
        $iframePlaceholder.html('<p class="text-muted">กรุณาเลือกอำเภอจากเมนูด้านซ้ายหรือค้นหาเพื่อแสดงข้อมูล...</p>').show();
        $currentDistrict.text('กรุณาเลือกอำเภอ');
    });

    // --- Event listener for district VIEW links ---
    $accordion.on('click', '.district-view-link', function (e) {
        e.preventDefault();
        const provinceCode = $(this).data('province-code');
        const districtCode = $(this).data('district-code');
        const districtName = $(this).find('.district-name').text().trim().replace("อ.", "อำเภอ");

        const excelFileUrl = `${diwBaseUrl}${encodeURIComponent(provinceCode)}-${encodeURIComponent(districtCode)}-.xls`;
        const officeViewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(excelFileUrl)}`;

        $iframePlaceholder.html(`<div class="d-flex justify-content-center align-items-center flex-column" style="height: 100%;">
            <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">
                <span class="visually-hidden">Loading...</span>
            </div>
            <strong class="mt-3">กำลังโหลดข้อมูล ${districtName}...</strong>
            <p class="text-muted mt-2">กรุณารอสักครู่</p>
        </div>`).show();
        $excelIframe.hide();
        $currentDistrict.html(`<i class="bi bi-geo-alt me-2"></i>${districtName}`);

        setTimeout(() => {
            $excelIframe.attr('src', officeViewerUrl);
            $excelIframe.on('load', function () {
                $iframePlaceholder.html("");
                $excelIframe.show();

            });
        }, 1000);
    });


    // ประกาศตัวแปร downloadQueue
    const $downloadQueue = $('#downloadQueue');

    // --- ฟังก์ชันสำหรับหน่วงเวลา (Delay Function) ---
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // --- Event listener for Download Selected Button ---
    $downloadSelectedBtn.on('click', async function () {
        const $checkedCheckboxes = $accordion.find('.district-checkbox:checked');
        if ($checkedCheckboxes.length === 0) {
            showAlert('warning', 'กรุณาเลือกไฟล์', 'กรุณาเลือกไฟล์ที่ต้องการดาวน์โหลดอย่างน้อยหนึ่งไฟล์');
            return;
        }

        const filesToDownload = [];
        $checkedCheckboxes.each(function () {
            const provinceCode = $(this).data('province-code');
            const districtCode = $(this).data('district-code');
            const fileName = $(this).data('filename') || `${provinceCode}-${districtCode}.xls`;
            const downloadUrl = `${diwBaseUrl}${provinceCode}-${districtCode}-.xls`;
            filesToDownload.push({
                url: downloadUrl,
                name: fileName,
                element: $(this)
            });
        });

        // แสดงแถบความคืบหน้า
        $progressContainer.removeClass('d-none');
        $progressCount.text(0);
        $totalCount.text(filesToDownload.length);
        $progressBar.css('width', '0%');

        // สร้างคิวดาวน์โหลด
        $downloadQueue.empty().removeClass('d-none');
        filesToDownload.forEach(file => {
            const queueItem = $(`
                <div class="queue-item" data-filename="${file.name}">
                    <i class="bi bi-clock me-2"></i> ${file.name}
                    <span class="queue-status"></span>
                </div>
            `);
            $downloadQueue.append(queueItem);
        });

        // แสดงการแจ้งเตือน
        const alert = showAlert('info', `กำลังดาวน์โหลดและแปลงไฟล์ ${filesToDownload.length} ไฟล์`, 'โปรดรอสักครู่...');

        let downloadedCount = 0;
        let failedCount = 0;
        const zip = new JSZip();

        // ฟังก์ชั่นดาวน์โหลดไฟล์แบบเป็นลำดับ (แก้ไขแล้ว)
        const downloadAndConvertSequentially = async () => {
            for (let i = 0; i < filesToDownload.length; i++) {
                const file = filesToDownload[i];
                const districtNameForStatus = file.name.replace('.xls', '').replace(/_/g, ' ');

                try {
                    // อัพเดทสถานะในคิว
                    $downloadQueue.find(`.queue-item[data-filename="${file.name}"]`)
                        .removeClass('completed failed')
                        .addClass('downloading')
                        .find('.queue-status')
                        .html(`<span class="text-primary">กำลังดาวน์โหลดและแปลง...</span>`);
                    
                    // อัพเดทการแจ้งเตือนหลัก
                    alert.find('.alert-body strong').text(`กำลังประมวลผล: ${districtNameForStatus}`);

                    // ดาวน์โหลดไฟล์
                    const data = await downloadFile(file.url);

                    // แปลงไฟล์ Excel เป็น CSV
                    const csvData = await convertXlsToCsv(data, file.name);

                    // เพิ่มไฟล์ CSV ลงใน zip
                    const csvFileName = file.name.replace('.xls', '.csv');
                    zip.file(csvFileName, csvData);

                    // อัพเดท UI เมื่อสำเร็จ
                    downloadedCount++;
                    $downloadQueue.find(`.queue-item[data-filename="${file.name}"]`)
                        .removeClass('downloading')
                        .addClass('completed')
                        .find('.queue-status')
                        .html(`<span class="download-success">แปลงเป็น CSV สำเร็จ <i class="bi bi-check-circle"></i></span>`);
                } catch (error) {
                    // อัพเดท UI เมื่อล้มเหลว
                    failedCount++;
                    $downloadQueue.find(`.queue-item[data-filename="${file.name}"]`)
                        .removeClass('downloading')
                        .addClass('failed')
                        .find('.queue-status')
                        .html(`<span class="download-failed">ล้มเหลว 
                            <button class="btn btn-sm btn-outline-danger retry-btn ms-2" title="ลองดาวน์โหลดไฟล์นี้อีกครั้ง">
                                <i class="bi bi-arrow-repeat"></i> ลองใหม่
                            </button>
                        </span>`);
                }

                // อัพเดทแถบความคืบหน้า
                const progressPercent = Math.round((downloadedCount + failedCount) / filesToDownload.length * 100);
                $progressCount.text(downloadedCount + failedCount);
                $progressBar.css('width', `${progressPercent}%`);

                // อัพเดทการแจ้งเตือน
                alert.find('.alert-body').html(`
                    <strong>กำลังประมวลผลไฟล์ ${downloadedCount + failedCount} จาก ${filesToDownload.length}</strong>
                    <div class="progress mt-2" style="height: 8px;">
                        <div class="progress-bar" role="progressbar" style="width: ${progressPercent}%"></div>
                    </div>
                    <div class="mt-2 small">ไฟล์สำเร็จ: ${downloadedCount} | ไฟล์ล้มเหลว: ${failedCount}</div>
                `);

                // *********** จุดที่เพิ่มเข้ามา ***********
                // หน่วงเวลา 2 วินาทีก่อนเริ่มดาวน์โหลดไฟล์ถัดไป (ยกเว้นไฟล์สุดท้าย)
                // เพื่อลดภาระบนเซิร์ฟเวอร์
                if (i < filesToDownload.length - 1) {
                    alert.find('.alert-body strong').text(`รอ 2 วินาที ก่อนเริ่มไฟล์ถัดไป...`);
                    await delay(2000); // หน่วงเวลา 2 วินาที
                }
                // ****************************************
            }

            // สร้างไฟล์ zip เมื่อแปลงไฟล์ครบทุกไฟล์
            if (downloadedCount > 0) {
                alert.find('.alert-body').html(`<strong>กำลังบีบอัดไฟล์ CSV...</strong><div class="mt-2">โปรดรอสักครู่</div>`);

                try {
                    // สร้างไฟล์ zip
                    const content = await zip.generateAsync({ type: 'blob' });

                    // ดาวน์โหลดไฟล์ zip
                    const url = URL.createObjectURL(content);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'factory_data_csv.zip';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);

                    // แจ้งเตือนสำเร็จ
                    showAlert('success', 'ดาวน์โหลดสำเร็จ', `ไฟล์ CSV ทั้งหมดถูกบีบอัดเป็น ZIP และพร้อมดาวน์โหลด`);
                } catch (error) {
                    showAlert('error', 'เกิดข้อผิดพลาด', 'ไม่สามารถสร้างไฟล์ ZIP ได้: ' + error.message);
                }
            } else {
                showAlert('error', 'เกิดข้อผิดพลาด', 'ไม่สามารถแปลงไฟล์ใดได้เลย');
            }

            // ดาวน์โหลดเสร็จสิ้น
            $progressBar.css('width', '100%');
            const message = failedCount > 0
                ? `<strong>ประมวลผลเสร็จสมบูรณ์ (มีข้อผิดพลาดบางไฟล์)!</strong>
                   <div class="mt-2">ไฟล์ที่สำเร็จ: ${downloadedCount} | ไฟล์ที่ล้มเหลว: ${failedCount}</div>
                   <div class="small mt-2">ไฟล์ CSV ที่แปลงสำเร็จถูกบีบอัดเป็น ZIP และดาวน์โหลดแล้ว</div>`
                : `<strong>ประมวลผลเสร็จสมบูรณ์!</strong>
                   <div class="mt-2">ไฟล์ CSV ทั้งหมด ${downloadedCount} ไฟล์ถูกบีบอัดเป็น ZIP และดาวน์โหลดแล้ว</div>`;

            alert.find('.alert-body').html(message);
            alert.find('.btn-close').show();
        };

        // เริ่มดาวน์โหลดและแปลงไฟล์แบบเป็นลำดับ
        downloadAndConvertSequentially();
    });

    // ฟังก์ชั่นดาวน์โหลดไฟล์
    function downloadFile(url) {
        return new Promise((resolve, reject) => {
            // ใช้ proxy เพื่อแก้ปัญหา CORS
            const proxyUrl = 'https://corsproxy.io/?';
            const fullUrl = proxyUrl + encodeURIComponent(url);

            fetch(fullUrl)
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.arrayBuffer();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    // ฟังก์ชั่นแปลงไฟล์ Excel เป็น CSV
    function convertXlsToCsv(arrayBuffer, filename) {
        return new Promise((resolve, reject) => {
            try {
                // อ่านไฟล์ Excel
                const workbook = XLSX.read(arrayBuffer, { type: 'array' });

                // รับชื่อชีตแรก
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];

                // แปลงเป็น CSV
                const csv = XLSX.utils.sheet_to_csv(worksheet, { FS: ',' });

                // เพิ่ม BOM สำหรับ UTF-8 เพื่อให้เปิดใน Excel ถูกต้อง
                const csvWithBom = '\uFEFF' + csv;

                resolve(csvWithBom);
            } catch (error) {
                reject(new Error(`ไม่สามารถแปลงไฟล์ ${filename} เป็น CSV: ${error.message}`));
            }
        });
    }

    // รองรับการลองดาวน์โหลดใหม่
    $(document).on('click', '.retry-btn', function () {
        const $queueItem = $(this).closest('.queue-item');
        const filename = $queueItem.data('filename');
        const $checkbox = $accordion.find(`.district-checkbox[data-filename="${filename}"]`);

        if ($checkbox.length) {
            $checkbox.prop('checked', true);
            $downloadSelectedBtn.click();
        }
    });

    // --- Show alert function ---
    function showAlert(type, title, message) {
        const alertId = 'custom-alert-' + Date.now();
        const alert = $(`
            <div id="${alertId}" class="alert alert-${type} alert-dismissible fade show position-fixed top-3 start-50 translate-middle-x" style="z-index: 1100; min-width: 350px;" role="alert">
                <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                        ${type === 'success' ? '<i class="bi bi-check-circle-fill fs-4"></i>' :
                type === 'warning' ? '<i class="bi bi-exclamation-triangle-fill fs-4"></i>' :
                    type === 'danger' ? '<i class="bi bi-x-circle-fill fs-4"></i>' :
                        '<i class="bi bi-info-circle-fill fs-4"></i>'}
                    </div>
                    <div class="flex-grow-1">
                        <h5 class="alert-heading mb-1">${title}</h5>
                        <div class="alert-body">${message}</div>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        `);

        $('body').append(alert);

        // Auto dismiss after 5 seconds for info alerts
        if (type === 'info') {
            setTimeout(() => {
                $('#' + alertId).alert('close');
            }, 5000);
        }

        return alert;
    }

    // --- Browse all files button ---
    $browseFilesBtn.on('click', function () {
        // Show all regions and provinces
        $accordion.find('.collapse').addClass('show');
        // Scroll to top of sidebar
        $('#sidebar').animate({ scrollTop: 0 }, 500);
    });
});