if (window.PrimeFaces) {
  /** Romanian */
  PrimeFaces.locales["ro"] = {
    accept: "Da",
    addRule: "Adăugă o regulă",
    am: "înainte de amiază",
    apply: "Aplică",
    cancel: "Anulează",
    choose: "Alege",
    chooseDate: "Alege data",
    chooseMonth: "Alege luna",
    chooseYear: "Alege anul",
    clear: "Curăță",
    completed: "Terminat",
    contains: "Conține",
    custom: "Personalizat",
    dateAfter: "Data este după",
    dateBefore: "Data este înainte",
    dateFormat: "dd.mm.yy",
    dateIs: "Data este",
    dateIsNot: "Data nu este",
    dayNames: ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
    dayNamesMin: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
    dayNamesShort: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sâm"],
    emptyFilterMessage: "Nu s-au găsite rezultate",
    emptyMessage: "Nu există opțiuni disponibile",
    emptySearchMessage: "Nu s-au găsite rezultate",
    emptySelectionMessage: "Niciun element selectat",
    endsWith: "Se termină cu",
    equals: "Este egal",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    filter: "Filtru",
    firstDayOfWeek: 1,
    gt: "Mai mare decât",
    gte: "Mai mare sau egal cu",
    lt: "Mai mic decât",
    lte: "Mai mic sau egal cu",
    matchAll: "Potrivește cu toate",
    matchAny: "Potrivește cu orice",
    medium: "Medie",
    monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
    monthNamesShort: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Noi", "Dec"],
    nextDecade: "Deceniul următor",
    nextHour: "Ora următoare",
    nextMinute: "Minutul următor",
    nextMonth: "Luna următoare",
    nextSecond: "Secunda anterioară",
    nextYear: "Anul următor",
    noFilter: "Fără filtru",
    notContains: "Nu conține",
    notEquals: "Nu este egal",
    now: "Acum",
    passwordPrompt: "Introduceți parola",
    pending: "În așteptare",
    pm: "după amiază",
    prevDecade: "Deceniul precedent",
    prevHour: "Ora precedentă",
    prevMinute: "Minutul precedent",
    prevMonth: "Luna precedentă",
    prevSecond: "Secunda precedentă",
    prevYear: "Anul precedent",
    reject: "Nu",
    removeRule: "Elimină regula",
    searchMessage: "{0} rezultate sunt disponibile",
    selectionMessage: "{0} elemente selectate",
    showMonthAfterYear: false,
    startsWith: "Începe cu",
    strong: "Puternică",
    today: "Astăzi",
    upload: "Încarcă",
    weak: "Slabă",
    weekHeader: "Săpt",
    aria: {
      cancelEdit: "Anulați editarea",
      close: "Închide",
      collapseLabel: "Colaps",
      collapseRow: "Rând restrâns",
      editRow: "Editați rândul",
      expandLabel: "Extinde",
      expandRow: "Rând extins",
      falseLabel: "Fals",
      filterConstraint: "Constrângere de filtrare",
      filterOperator: "Operator de filtrare",
      firstPageLabel: "Prima pagină",
      gridView: "Vizualizare grilă",
      hideFilterMenu: "Ascundeți meniul filtrului",
      jumpToPageDropdownLabel: "Treceți la meniul derulant al paginii",
      jumpToPageInputLabel: "Treceți la pagina de intrare",
      lastPageLabel: "Ultima pagină",
      listView: "Vizualizare listă",
      moveAllToSource: "Mutați totul la sursă",
      moveAllToTarget: "Mutați totul la țintă",
      moveBottom: "Mutați la sfârșit",
      moveDown: "Mutați în jos",
      moveTop: "Mutați la început",
      moveToSource: "Mutați la sursă",
      moveToTarget: "Mutați la țintă",
      moveUp: "Mutați în sus",
      navigation: "Navigare",
      next: "Următor",
      nextPageLabel: "Pagina următoare",
      nullLabel: "Neselectat",
      otpLabel: "Vă rugăm să introduceți caracterul de parolă unică {0}",
      pageLabel: "Pagina {page}",
      passwordHide: "Ascundeți parola",
      passwordShow: "Arata parola",
      previous: "Precedent",
      previousPageLabel: "Pagina precedentă",
      rotateLeft: "Rotiți la stânga",
      rotateRight: "Rotiți la dreapta",
      rowsPerPageLabel: "Rânduri pe pagină",
      saveEdit: "Salvați editarea",
      scrollTop: "Derulați la început",
      selectAll: "Toate elementele selectate",
      selectLabel: "Selectați",
      selectRow: "Rând selectat",
      showFilterMenu: "Afișați meniul filtrului",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      star: "1 stea",
      stars: "{star} stele",
      trueLabel: "Adevărat",
      unselectAll: "Toate elementele neselectate",
      unselectLabel: "Deselectați",
      unselectRow: "Rând neselectat",
      zoomImage: "Măriți imaginea",
      zoomIn: "Măriți",
      zoomOut: "Micșorați",
    },
  };

  // custom PF labels
  PrimeFaces.locales["ro"] = $.extend(true, {}, PrimeFaces.locales["ro"], {
    isRTL: false,
    yearSuffix: "",
    timeOnlyTitle: "Doar timp",
    timeText: "Timp",
    hourText: "Ora",
    minuteText: "Minut",
    secondText: "Secunde",
    millisecondText: "Milisecunde",
    month: "Luna",
    week: "Săptămâna",
    day: "Zi",
    allDayText: "Toată ziua",
    moreLinkText: "Mai mult...",
    noEventsText: "Fără Evenimente",
    aria: {
      "datatable.sort.ASC": "activare pentru a sorta coloana crescător",
      "datatable.sort.DESC": "activare pentru a sorta coloana descrescător",
      "datatable.sort.NONE": "activare pentru a elimina sortarea pe coloană",
      "colorpicker.OPEN": "Deschideți selectorul de culori",
      "colorpicker.CLOSE": "Închideți selectorul de culori",
      "colorpicker.CLEAR": "Ștergeți culoarea selectată",
      "colorpicker.MARKER": "Saturație: {s}. Luminozitate: {v}.",
      "colorpicker.HUESLIDER": "Slider de nuanță",
      "colorpicker.ALPHASLIDER": "Slider de opacitate",
      "colorpicker.INPUT": "Câmp pentru valoarea culorii",
      "colorpicker.FORMAT": "Format de culoare",
      "colorpicker.SWATCH": "Eșantion de culoare",
      "colorpicker.INSTRUCTION": "Selector de saturație și luminozitate. Folosiți tastele săgeți sus, jos, stânga și dreapta pentru a selecta.",
      "spinner.INCREASE": "Măriți valoarea",
      "spinner.DECREASE": "Reduceți valoarea",
      "switch.ON": "Pe",
      "switch.OFF": "Off",
      "messages.ERROR": "Eroare",
      "messages.FATAL": "Fatal",
      "messages.INFO": "Infromație",
      "messages.WARN": "Atenție",
    },
    messages: {
      "javax.faces.component.UIInput.REQUIRED": "{0}: Eroare de validare: Valoarea este obligatorie.",
      "javax.faces.converter.IntegerConverter.INTEGER": "{2}: '{0}' trebuie să fie un număr format din una sau mai multe cifre.",
      "javax.faces.converter.IntegerConverter.INTEGER_detail": "{2}: '{0}' trebuie să fie un număr între -2147483648 și 2147483647. Exemplu: {1}.",
      "javax.faces.converter.DoubleConverter.DOUBLE": "{2}: '{0}' trebuie să fie un număr format din una sau mai multe cifre.",
      "javax.faces.converter.DoubleConverter.DOUBLE_detail": "{2}: '{0}' trebuie să fie un număr între 4.9E-324 și 1.7976931348623157E308. Exemplu: {1}.",
      "javax.faces.converter.BigDecimalConverter.DECIMAL": "{2}: '{0}' trebuie să fie un număr zecimal cu semn.",
      "javax.faces.converter.BigDecimalConverter.DECIMAL_detail": "{2}: '{0}' trebuie să fie un număr zecimal cu semn format din zero sau mai multe cifre, care poate fi urmat de un punct zecimal și o fracție. Exemplu: {1}.",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER": "{2}: '{0}' trebuie să fie un număr format din una sau mai multe cifre.",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail": "{2}: '{0}' trebuie să fie un număr format din una sau mai multe cifre. Exemplu: {1}.",
      "javax.faces.converter.ByteConverter.BYTE": "{2}: '{0}' trebuie să fie un număr între 0 și 255.",
      "javax.faces.converter.ByteConverter.BYTE_detail": "{2}: '{0}' trebuie să fie un număr între 0 și 255. Exemplu: {1}.",
      "javax.faces.converter.CharacterConverter.CHARACTER": "{1}: '{0}' trebuie să fie un caracter valid.",
      "javax.faces.converter.CharacterConverter.CHARACTER_detail": "{1}: '{0}' trebuie să fie un caracter ASCII valid.",
      "javax.faces.converter.ShortConverter.SHORT": "{2}: '{0}' trebuie să fie un număr format din una sau mai multe cifre.",
      "javax.faces.converter.ShortConverter.SHORT_detail": "{2}: '{0}' trebuie să fie un număr între -32768 și 32767. Exemplu: {1}.",
      "javax.faces.converter.BooleanConverter.BOOLEAN": "{1}: '{0}' trebuie să fie adevărat sau false.",
      "javax.faces.converter.BooleanConverter.BOOLEAN_detail": "{1}: '{0}' trebuie să fie adevărat sau false. Orice altă valoare diferită de adevărat va trece în fals.",
      "javax.faces.validator.LongRangeValidator.MAXIMUM": "{1}: Eroare de validare: Valoarea este mai mare decât maximul admisibil de '{0}'.",
      "javax.faces.validator.LongRangeValidator.MINIMUM": "{1}: Eroare de validare: Valoarea este mai mică decât minimul admisibil de '{0}'.",
      "javax.faces.validator.LongRangeValidator.NOT_IN_RANGE": "{2}: Eroare de validare: Atributul specificat nu se încadrează între valorile așteptate de {0} și {1}.",
      "javax.faces.validator.LongRangeValidator.TYPE": "{0}: Eroare de validare: Tipul valorii este greșit.",
      "javax.faces.validator.DoubleRangeValidator.MAXIMUM": "{1}: Eroare de validare: Valoarea este mai mare decât maximul admisibil de '{0}'.",
      "javax.faces.validator.DoubleRangeValidator.MINIMUM": "{1}: Eroare de validare: Valoarea este mai mică decât minimul admisibil de '{0}'.",
      "javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE": "{2}: Eroare de validare: Atributul specificat nu se încadrează între valorile așteptate de {0} și {1}.",
      "javax.faces.validator.DoubleRangeValidator.TYPE": "{0}: Eroare de validare: Tipul valorii este greșit.",
      "javax.faces.converter.FloatConverter.FLOAT": "{2}: '{0}' trebuie să fie un număr format din una sau mai multe cifre.",
      "javax.faces.converter.FloatConverter.FLOAT_detail": "{2}: '{0}' trebuie să fie un număr între 1.4E-45 și 3.4028235E38. Exemplu: {1}.",
      "javax.faces.converter.DateTimeConverter.DATE": "{2}: '{0}' nu a putut fi înțeles ca o dată.",
      "javax.faces.converter.DateTimeConverter.DATE_detail": "{2}: '{0}' nu a putut fi înțeles ca o dată. Exemplu: {1}.",
      "javax.faces.converter.DateTimeConverter.TIME": "{2}: '{0}' nu a putut fi înțeles ca un timp.",
      "javax.faces.converter.DateTimeConverter.TIME_detail": "{2}: '{0}' nu a putut fi înțeles ca un timp. Exemplu: {1}.",
      "javax.faces.converter.DateTimeConverter.DATETIME": "{2}: '{0}' nu a putut fi înțeles ca o dată și timp.",
      "javax.faces.converter.DateTimeConverter.DATETIME_detail": "{2}: '{0}' nu a putut fi înțeles ca o dată și timp. Exemplu: {1}.",
      "javax.faces.converter.DateTimeConverter.PATTERN_TYPE": "{1}: Trebuie specificat un atribut 'pattern' sau 'type' pentru a converti valoarea '{0}'.",
      "javax.faces.converter.NumberConverter.CURRENCY": "{2}: '{0}' nu a putut fi înțeles ca o valută.",
      "javax.faces.converter.NumberConverter.CURRENCY_detail": "{2}: '{0}' nu a putut fi înțeles ca o valută. Exemplu: {1}.",
      "javax.faces.converter.NumberConverter.PERCENT": "{2}: '{0}' nu a putut fi înțeles ca un procent.",
      "javax.faces.converter.NumberConverter.PERCENT_detail": "{2}: '{0}' nu a putut fi înțeles ca un procent. Exemplu: {1}.",
      "javax.faces.converter.NumberConverter.NUMBER": "{2}: '{0}' nu poate fi înțeles ca un număr.",
      "javax.faces.converter.NumberConverter.NUMBER_detail": "{2}: '{0}' nu poate fi înțeles ca un număr. Exemplu: {1}.",
      "javax.faces.converter.NumberConverter.PATTERN": "{2}: '{0}' nu poate fi înțeles ca un șablon numeric.",
      "javax.faces.converter.NumberConverter.PATTERN_detail": "{2}: '{0}' nu poate fi înțeles ca un șablon numeric. Exemplu: {1}.",
      "javax.faces.validator.LengthValidator.MINIMUM": "{1}: Eroare de validare: Lungimea este mai mică decât minimul admisibil de '{0}'.",
      "javax.faces.validator.LengthValidator.MAXIMUM": "{1}: Eroare de validare: Lungimea este mai mare decât maximul admisibil de '{0}'.",
      "javax.faces.validator.RegexValidator.PATTERN_NOT_SET": "Modelul Regex trebuie setată.",
      "javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail": "Modelul Regex trebuie setată pentru o valoare ce nu poate fi goală.",
      "javax.faces.validator.RegexValidator.NOT_MATCHED": "Modelul Regex nu se potrivește.",
      "javax.faces.validator.RegexValidator.NOT_MATCHED_detail": "Modelul regex '{0}' nu se potrivește.",
      "javax.faces.validator.RegexValidator.MATCH_EXCEPTION": "Eroare la expresia regulată.",
      "javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail": "Eroare la expresia regulată, '{0}'.",
      "primefaces.FileValidator.FILE_LIMIT": "Numărul maxim de fișiere depășit.",
      "primefaces.FileValidator.FILE_LIMIT_detail": "Număr maxim: {0}.",
      "primefaces.FileValidator.ALLOW_TYPES": "Tip de fișier nevalid.",
      "primefaces.FileValidator.ALLOW_TYPES_detail": "Tip de fișier nevalid: „{0}”. Tipuri permise: „{1}”.",
      "primefaces.FileValidator.SIZE_LIMIT": "Dimensiunea fișierului nevalidă.",
      "primefaces.FileValidator.SIZE_LIMIT_detail": "Fișierul „{0}” nu trebuie să fie mai mare de {1}.",
      //optional for bean validation integration in client side validation
      "javax.faces.validator.BeanValidator.MESSAGE": "{0}",
      "javax.validation.constraints.AssertFalse.message": "trebuie să fie fals",
      "javax.validation.constraints.AssertTrue.message": "trebuie să fie adevărat",
      "javax.validation.constraints.DecimalMax.message": "trebuie să fie mai mic sau egal cu {0}",
      "javax.validation.constraints.DecimalMin.message": "trebuie să fie mai mare sau egal cu {0}",
      "javax.validation.constraints.Digits.message": "valoare numerică în afara limitelor (&lt;{0} cifre&gt;.&lt;{1} cifre&gt; așteptate)",
      "javax.validation.constraints.Email.message": "trebuie să fie o adresă de e-mail bine formată",
      "javax.validation.constraints.Future.message": "trebuie să fie o dată viitoare",
      "javax.validation.constraints.FutureOrPresent.message": "trebuie să fie o dată în prezent sau în viitor",
      "javax.validation.constraints.Max.message": "trebuie să fie mai mic sau egal cu {0}",
      "javax.validation.constraints.Min.message": "trebuie să fie mai mare sau egal cu {0}",
      "javax.validation.constraints.Negative.message": "trebuie să fie mai mică de 0",
      "javax.validation.constraints.NegativeOrZero.message": "trebuie să fie mai mică sau egală cu 0",
      "javax.validation.constraints.NotBlank.message": "nu trebuie să fie goală",
      "javax.validation.constraints.NotEmpty.message": "nu trebuie să fie goale",
      "javax.validation.constraints.NotNull.message": "nu trebuie să fie nulă",
      "javax.validation.constraints.Null.message": "trebuie să fie nulă",
      "javax.validation.constraints.Past.message": "trebuie să fie o întâlnire trecută",
      "javax.validation.constraints.PastOrPresent.message": "trebuie să fie o dată în trecut sau în prezent",
      "javax.validation.constraints.Pattern.message": "trebuie să se potrivească cu „{0}”",
      "javax.validation.constraints.Positive.message": "trebuie să fie mai mare decât 0",
      "javax.validation.constraints.PositiveOrZero.message": "trebuie să fie mai mare sau egal cu 0",
      "javax.validation.constraints.Size.message": "dimensiunea trebuie să fie între {0} și {1}",
    },
  });
}
