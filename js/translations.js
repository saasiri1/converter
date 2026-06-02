/**
 * translations.js
 * All UI strings for Arabic (ar) and English (en).
 */

const translations = {
  ar: {
    // Header
    headerTitle:      'محول درجات بلاك بورد',
    headerSub:        'تحويل درجات بلاك بورد إلى نموذج كشف الدرجات الجامعي',
    langBtn:          'English',

    // Step 1
    step1Title:       'رفع الملفات',
    bbFileLabel:      'ملف بلاك بورد (.xls)',
    bbUploadLabel:    'اضغط لرفع ملف بلاك بورد',
    bbUploadSub:      'يحتوي على: اسم المستخدم، الدرجات',
    bbNote:           'يجب تحميل هذا الملف من مركز الدرجات في بلاك بورد. تأكد أن أعمدة الدرجات تحتوي على [إجمالي النقاط: ...النتيجة] في اسم العمود.',
    ugFileLabel:      'ملف كشف الدرجات الجامعي (.xls) من أكاديميا',
    ugUploadLabel:    'اضغط لرفع كشف الدرجات',
    ugUploadSub:      'يحتوي على: رقم الطالب، اسم الطالب',
    btnParse:         'تحليل الملفات',

    // Step 2
    step2Title:       'إعداد التحويل',
    hasFinalLabel:    'هل يوجد درجة اختبار نهائي؟',
    hasFinalYes:      'نعم',
    hasFinalNo:       'لا، فصلي فقط',

    // Final source
    finalSourceLabel: 'مصدر درجة النهائي',
    finalSourceBB:    'من أعمدة بلاك بورد',
    finalSourceFile:  'رفع ملف اختبار نهائي منفصل',

    // Separate final file
    finalFileLabel:   'ملف الاختبار النهائي',
    finalUploadLabel: 'اضغط لرفع ملف النهائي',
    finalUploadSub:   'Excel بأي تنسيق',
    finalFileNote:    'بعد الرفع، اختر العمود الذي يحتوي على رقم الطالب والعمود الذي يحتوي على الدرجة الكلية.',
    finalStudentCol:  'عمود رقم الطالب',
    finalGradeCol:    'عمود الدرجة الكلية',
    selectColPH:      '-- اختر العمود --',
    finalFileMax:     'الدرجة الكاملة لملف النهائي',

    // Weights
    weightsLabel:     'أوزان الدرجات في الكشف الجامعي',
    midWeightLabel:   'الدرجة الكاملة للفصلي',
    finWeightLabel:   'الدرجة الكاملة للنهائي',
    gradeUnit:        'درجة',

    // Extra credit
    extraCreditToggle: 'يوجد درجة إضافية (Extra Credit) في بلاك بورد',
    extraCreditHint:   'أعمدة الدرجة الإضافية تُجمع وتُضاف مباشرةً إلى المجموع الكلي دون قسمة أو ضرب.',
    extraCreditPanel:  'أعمدة الدرجة الإضافية',
    extraCreditTag:    'درجة',
    extraCreditCap:    'حد أقصى للدرجة الإضافية (اختياري)',
    extraCreditCapHint:'اتركه فارغاً إذا لم يكن هناك حد أقصى.',

    // Column panels
    colAssignLabel:   'تعيين أعمدة بلاك بورد',
    colAssignHint:    'حدد الأعمدة لكل فئة — اختيار عمود في فئة يزيله تلقائياً من الفئات الأخرى',
    midPanelTitle:    'أعمدة الفصلي',
    midTag:           'فصلي',
    finPanelTitle:    'أعمدة النهائي',
    finTag:           'نهائي',
    selectAll:        'تحديد الكل',
    deselectAll:      'إلغاء الكل',
    midMaxLabel:      'مجموع الدرجة الكاملة للفصلي:',
    finMaxLabel:      'مجموع الدرجة الكاملة للنهائي:',
    autoCalcHint:     'يُحسب تلقائياً من مجموع الأعمدة المختارة. يمكنك تعديله يدوياً.',

    // Formula
    formulaMid:       (mw) => `درجة الفصلي (من ${mw}) = (مجموع الأعمدة الفصلية ÷ الدرجة الكاملة) × ${mw}`,
    formulaFin:       (fw) => `درجة النهائي (من ${fw}) = (مجموع الأعمدة النهائية ÷ الدرجة الكاملة) × ${fw}`,
    formulaNoFin:     'درجة النهائي = لا يوجد',
    formulaExtra:     'الدرجة = مجموع أعمدة الدرجة (تُضاف مباشرة)',
    formulaTotal:     (hasFinal, hasExtra) => `الدرجة الكلية = الفصلي${hasFinal ? ' + النهائي' : ''}${hasExtra ? ' + الدرجة' : ''}`,

    outOf:            (n) => `من ${n}`,
    placeholder:      'تلقائي',
    btnConvert:       'تحويل الدرجات',

    // Step 3
    step3Title:       'النتائج والتحميل',
    btnDownload:      'تحميل كشف الدرجات المحدّث',
    noteCheck:        'تنبيه: يرجى مراجعة الدرجات والتحقق منها قبل رفعها إلى النظام.',
    totalStudents:    'إجمالي الطلاب',
    updated:          'تم تحديث درجاتهم',
    notFound:         'غير موجودين في بلاك بورد',
    warnTitle:        'تنبيه',
    warnMsg:          'الطلاب التاليون في الكشف الجامعي لم يُعثر عليهم في بلاك بورد:',
    successMsg:       'تم العثور على جميع الطلاب في بلاك بورد بنجاح.',
    errMidCol:        'يرجى اختيار عمود واحد على الأقل للدرجة الفصلية',
    errMidMax:        'يرجى إدخال الدرجة الكاملة للفصلي',
    errFinCol:        'يرجى اختيار عمود واحد على الأقل للدرجة النهائية',
    errFinMax:        'يرجى إدخال الدرجة الكاملة للنهائي',
    errFinFile:       'يرجى رفع ملف الاختبار النهائي',
    errFinFileCol:    'يرجى اختيار عمود رقم الطالب وعمود الدرجة من ملف النهائي',
    errFinFilMax:     'يرجى إدخال الدرجة الكاملة لملف النهائي',

    // Table
    tblNum:           'رقم الطالب',
    tblName:          'اسم الطالب',
    tblMid:           'الفصلي',
    tblFin:           'النهائي',
    tblExtra:         'الدرجة',
    tblTotal:         'الدرجة',
    tblGrade:         'التقدير',
    tblStatus:        'الحالة',
    statusOk:         'تم',
    statusMissing:    'غير موجود',
    statusExcused:    'ع',

    // Footer
    footerRights:     'جميع الحقوق محفوظة. | All Rights Reserved.',
  },

  en: {
    // Header
    headerTitle:      'Blackboard Grade Converter',
    headerSub:        'Convert Blackboard grades into the university grade sheet format',
    langBtn:          'العربية',

    // Step 1
    step1Title:       'Upload Files',
    bbFileLabel:      'Blackboard File (.xls)',
    bbUploadLabel:    'Click to upload Blackboard file',
    bbUploadSub:      'Contains: Username, Grades',
    bbNote:           'This file must be downloaded from the Blackboard Grade Center. Ensure grade columns contain [إجمالي النقاط: ...النتيجة] in their column name.',
    ugFileLabel:      'University Grade Sheet (.xls) from Academia',
    ugUploadLabel:    'Click to upload grade sheet',
    ugUploadSub:      'Contains: Student Number, Name',
    btnParse:         'Analyse Files',

    // Step 2
    step2Title:       'Configure Conversion',
    hasFinalLabel:    'Is there a Final Exam grade?',
    hasFinalYes:      'Yes',
    hasFinalNo:       'No, midterm only',

    // Final source
    finalSourceLabel: 'Final exam grade source',
    finalSourceBB:    'From Blackboard columns',
    finalSourceFile:  'Upload a separate final exam file',

    // Separate final file
    finalFileLabel:   'Final Exam File',
    finalUploadLabel: 'Click to upload final exam file',
    finalUploadSub:   'Any Excel format',
    finalFileNote:    'After uploading, select which column contains the student number and which contains the total grade.',
    finalStudentCol:  'Student Number Column',
    finalGradeCol:    'Total Grade Column',
    selectColPH:      '-- Select column --',
    finalFileMax:     'Full marks in the final exam file',

    // Weights
    weightsLabel:     'Grade weights in the university sheet',
    midWeightLabel:   'Full marks for Midterm',
    finWeightLabel:   'Full marks for Final',
    gradeUnit:        'pts',

    // Extra credit
    extraCreditToggle: 'Blackboard has Extra Credit columns',
    extraCreditHint:   'Extra credit columns are summed and added directly to the total grade without any scaling.',
    extraCreditPanel:  'Extra Credit Columns',
    extraCreditTag:    'Extra',
    extraCreditCap:    'Extra credit cap (optional)',
    extraCreditCapHint:'Leave empty for no cap.',

    // Column panels
    colAssignLabel:   'Assign Blackboard columns',
    colAssignHint:    'Select columns for each category — picking a column in one category removes it from all others',
    midPanelTitle:    'Midterm Columns',
    midTag:           'Midterm',
    finPanelTitle:    'Final Columns',
    finTag:           'Final',
    selectAll:        'Select all',
    deselectAll:      'Deselect all',
    midMaxLabel:      'Total full marks for Midterm:',
    finMaxLabel:      'Total full marks for Final:',
    autoCalcHint:     'Auto-calculated from selected columns. You can override it manually.',

    // Formula
    formulaMid:       (mw) => `Midterm (out of ${mw}) = (sum of midterm columns ÷ full marks) × ${mw}`,
    formulaFin:       (fw) => `Final (out of ${fw}) = (sum of final columns ÷ full marks) × ${fw}`,
    formulaNoFin:     'Final = N/A',
    formulaExtra:     'Extra Credit = sum of extra credit columns (added directly)',
    formulaTotal:     (hasFinal, hasExtra) => `Total = Midterm${hasFinal ? ' + Final' : ''}${hasExtra ? ' + Extra Credit' : ''}`,

    outOf:            (n) => `/ ${n}`,
    placeholder:      'Auto',
    btnConvert:       'Convert Grades',

    // Step 3
    step3Title:       'Results & Download',
    btnDownload:      'Download Updated Grade Sheet',
    noteCheck:        'Note: Please review and verify all grades before submitting them to the system.',
    totalStudents:    'Total Students',
    updated:          'Grades Updated',
    notFound:         'Not Found in Blackboard',
    warnTitle:        'Warning',
    warnMsg:          'The following students are in the university sheet but were not found in Blackboard:',
    successMsg:       'All students were successfully matched in Blackboard.',
    errMidCol:        'Please select at least one Midterm column',
    errMidMax:        'Please enter the full marks for Midterm',
    errFinCol:        'Please select at least one Final column',
    errFinMax:        'Please enter the full marks for Final',
    errFinFile:       'Please upload the final exam file',
    errFinFileCol:    'Please select the student number and grade columns from the final exam file',
    errFinFilMax:     'Please enter the full marks for the final exam file',

    // Table
    tblNum:           'Student No.',
    tblName:          'Name',
    tblMid:           'Midterm',
    tblFin:           'Final',
    tblExtra:         'Extra Credit',
    tblTotal:         'Total',
    tblGrade:         'Grade',
    tblStatus:        'Status',
    statusOk:         'Updated',
    statusMissing:    'Not Found',
    statusExcused:    'Excused',

    // Footer
    footerRights:     'All Rights Reserved. | جميع الحقوق محفوظة.',
  }
};
