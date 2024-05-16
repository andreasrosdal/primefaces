if (window.PrimeFaces) {
  /** Croatian (from PrimeLocale)*/
  PrimeFaces.locales["hr"] = {
    accept: "Da",
    addRule: "Dodaj pravilo",
    am: "AM",
    apply: "Primijeni",
    cancel: "Odustani",
    choose: "Odaberi",
    chooseDate: "Odaberi datum",
    chooseMonth: "Odaberi mjesec",
    chooseYear: "Odaberi godinu",
    clear: "Očisti",
    completed: "Završeno",
    contains: "Sadrži",
    custom: "Prilagođeno",
    dateAfter: "Datum je poslije",
    dateBefore: "Datum je prije",
    dateFormat: "dd.mm.yy.",
    dateIs: "Datum je",
    dateIsNot: "Datum nije",
    dayNames: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
    dayNamesMin: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
    dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
    emptyFilterMessage: "Nema pronađenih rezultata",
    emptyMessage: "Nema dostupnih opcija",
    emptySearchMessage: "Nema pronađenih rezultata",
    emptySelectionMessage: "Nema odabrane stavke",
    endsWith: "Završava s",
    equals: "Jednako",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    filter: "Filter",
    firstDayOfWeek: 1,
    gt: "Veće od",
    gte: "Veće ili jednako",
    lt: "Manje od",
    lte: "Manje ili jednako",
    matchAll: "Podudara se sve",
    matchAny: "Podudara se bilo koji",
    medium: "Srednje",
    monthNames: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
    monthNamesShort: ["Sij", "Vel", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
    nextDecade: "Sljedeće desetljeće",
    nextHour: "Sljedeći sat",
    nextMinute: "Sljedeća minuta",
    nextMonth: "Sljedeći mjesec",
    nextSecond: "Sljedeća sekunda",
    nextYear: "Sljedeća godina",
    noFilter: "Bez filtera",
    notContains: "Ne sadrži",
    notEquals: "Nije jednako",
    now: "Sada",
    passwordPrompt: "Unesite lozinku",
    pending: "U tijeku",
    pm: "PM",
    prevDecade: "Prethodno desetljeće",
    prevHour: "Prethodni sat",
    prevMinute: "Prethodna minuta",
    prevMonth: "Prethodni mjesec",
    prevSecond: "Prethodna sekunda",
    prevYear: "Prethodna godina",
    reject: "Ne",
    removeRule: "Ukloni pravilo",
    searchMessage: "Dostupno rezultata: {0}",
    selectionMessage: "Odabrano stavki: {0}",
    showMonthAfterYear: false,
    startsWith: "Počinje s",
    strong: "Jako",
    today: "Danas",
    upload: "Učitaj",
    weak: "Slabo",
    weekHeader: "Tj",
    aria: {
      cancelEdit: "Odustani od uređivanja",
      close: "Zatvori",
      collapseLabel: "Kolaps",
      collapseRow: "Redak skupljen",
      editRow: "Uredi redak",
      expandLabel: "Proširiti",
      expandRow: "Redak proširen",
      falseLabel: "Ne",
      filterConstraint: "Ograničenje filtra",
      filterOperator: "Operator filtra",
      firstPageLabel: "Prva stranica",
      gridView: "Prikaz u mreži",
      hideFilterMenu: "Sakrij izbornik filtra",
      jumpToPageDropdownLabel: "Skok na stranicu (padajući izbornik)",
      jumpToPageInputLabel: "Skok na stranicu (unos)",
      lastPageLabel: "Zadnja stranica",
      listView: "Prikaz u listi",
      moveAllToSource: "Pomakni sve na izvor",
      moveAllToTarget: "Pomakni sve na cilj",
      moveBottom: "Pomakni na dno",
      moveDown: "Pomakni dolje",
      moveTop: "Pomakni na vrh",
      moveToSource: "Pomakni na izvor",
      moveToTarget: "Pomakni na cilj",
      moveUp: "Pomakni gore",
      navigation: "Navigacija",
      next: "Sljedeće",
      nextPageLabel: "Sljedeća stranica",
      nullLabel: "Nije odabrano",
      otpLabel: "Unesite jednokratnu lozinku {0}",
      pageLabel: "Stranica {page}",
      passwordHide: "Sakrij lozinku",
      passwordShow: "Pokaži lozinku",
      previous: "Prethodno",
      previousPageLabel: "Prethodna stranica",
      rotateLeft: "Rotiraj ulijevo",
      rotateRight: "Rotiraj udesno",
      rowsPerPageLabel: "Redaka po stranici",
      saveEdit: "Spremi promjene",
      scrollTop: "Pomakni na vrh",
      selectAll: "Odabrane su sve stavke",
      selectLabel: "Izaberi",
      selectRow: "Redak odabran",
      showFilterMenu: "Prikaži izbornik filtra",
      slide: "Slajd",
      slideNumber: "Slajd {slideNumber}",
      star: "1 zvijezda",
      stars: "Zvijezda: {start}",
      trueLabel: "Da",
      unselectAll: "Poništen je odabir svih stavki",
      unselectLabel: "Poništi odabir",
      unselectRow: "Redak neodabran",
      zoomImage: "Povećaj sliku",
      zoomIn: "Povećaj",
      zoomOut: "Smanji",
    },
  };

  // custom PF labels
  PrimeFaces.locales["hr"] = $.extend(true, {}, PrimeFaces.locales["hr"], {
    weekNumberTitle: "T",
    isRTL: false,
    yearSuffix: "",
    timeOnlyTitle: "Samo vrijeme",
    timeText: "Vrijeme",
    hourText: "Sat",
    minuteText: "Minuta",
    secondText: "Sekunda",
    millisecondText: "Milisekunda",
    year: "Godina",
    month: "Mjesec",
    week: "Tjedan",
    day: "Dan",
    list: "Lista",
    allDayText: "Cijeli dan",
    moreLinkText: "Više...",
    noEventsText: "Nema događaja",
    unexpectedError: "Neočekivana pogreška",
    aria: {
      "datatable.sort.ASC": "aktivirajte za sortiranje stupca uzlazno",
      "datatable.sort.DESC": "aktivirajte za sortiranje stupca silazno",
      "datatable.sort.NONE": "aktivirajte za uklanjanje sortiranja stupca",
      "colorpicker.OPEN": "Otvori paletu boja",
      "colorpicker.CLOSE": "Zatvori paletu boja",
      "colorpicker.CLEAR": "Poništi odabir boje",
      "colorpicker.MARKER": "Zasićenost: {s}. Svjetlina: {v}.",
      "colorpicker.HUESLIDER": "Klizač za nijansu",
      "colorpicker.ALPHASLIDER": "Klizač za neprozirnost",
      "colorpicker.INPUT": "Polje za unos boje",
      "colorpicker.FORMAT": "Format boje",
      "colorpicker.SWATCH": "Uzorak boje",
      "colorpicker.INSTRUCTION": "Selektor zasićenosti i svjetline. Koristite strelice prema gore, dolje, lijevo i desno za odabir.",
      "spinner.INCREASE": "Povećaj vrijednost",
      "spinner.DECREASE": "Smanji vrijednost",
      "switch.ON": "Uključeno",
      "switch.OFF": "Isključeno",
      "messages.ERROR": "Pogreška",
      "messages.FATAL": "Fatalna pogreška",
      "messages.INFO": "Informacija",
      "messages.WARN": "Upozorenje",
    },
    messages: {
      //optional for Client Side Validation
      "javax.faces.component.UIInput.REQUIRED": "{0}: Greška validacije: Vrijednost je obavezna.",
      "javax.faces.converter.IntegerConverter.INTEGER": "{2}: '{0}' mora biti broj sastavljen od jedne ili više znamenki.",
      "javax.faces.converter.IntegerConverter.INTEGER_detail": "{2}: '{0}' mora biti broj između -2147483648 i 2147483647. Primjer: {1}.",
      "javax.faces.converter.DoubleConverter.DOUBLE": "{2}: '{0}' mora biti broj sastavljen od jedne ili više znamenki.",
      "javax.faces.converter.DoubleConverter.DOUBLE_detail": "{2}: '{0}' mora biti broj između 4.9E-324 i 1.7976931348623157E308. Primjer: {1}.",
      "javax.faces.converter.BigDecimalConverter.DECIMAL": "{2}: '{0}' mora biti decimalni broj s predznakom.",
      "javax.faces.converter.BigDecimalConverter.DECIMAL_detail": "{2}: '{0}' mora biti decimalni broj s predznakom sastavljen od nula ili više znamenki, koji može biti praćen decimalnom točkom i decimalnim znamenkama. Primjer: {1}.",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER": "{2}: '{0}' mora biti broj sastavljen od jedne ili više znamenki.",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail": "{2}: '{0}' mora biti broj sastavljen od jedne ili više znamenki. Primjer: {1}.",
      "javax.faces.converter.ByteConverter.BYTE": "{2}: '{0}' mora biti broj između 0 i 255.",
      "javax.faces.converter.ByteConverter.BYTE_detail": "{2}: '{0}' mora biti broj između 0 i 255. Primjer: {1}.",
      "javax.faces.converter.CharacterConverter.CHARACTER": "{1}: '{0}' mora biti valjani znak.",
      "javax.faces.converter.CharacterConverter.CHARACTER_detail": "{1}: '{0}' mora biti valjani ASCII znak.",
      "javax.faces.converter.ShortConverter.SHORT": "{2}: '{0}' mora biti broj sastavljen od jedne ili više znamenki.",
      "javax.faces.converter.ShortConverter.SHORT_detail": "{2}: '{0}' mora biti broj između -32768 i 32767. Primjer: {1}.",
      "javax.faces.converter.BooleanConverter.BOOLEAN": "{1}: '{0}' mora biti 'true' ili 'false'.",
      "javax.faces.converter.BooleanConverter.BOOLEAN_detail": "{1}: '{0}' mora biti 'true' ili 'false'. Bilo koja vrijednost osim 'true' vrednovat će se kao 'false'.",
      "javax.faces.validator.LongRangeValidator.MAXIMUM": "{1}: Greška validacije: Vrijednost je veća od dopuštenog maksimuma od '{0}'.",
      "javax.faces.validator.LongRangeValidator.MINIMUM": "{1}: Greška validacije: Vrijednost je manja od dopuštenog minimuma od '{0}'.",
      "javax.faces.validator.LongRangeValidator.NOT_IN_RANGE": "{2}: Greška validacije: Navedena vrijednost nije između očekivanih vrijednosti od {0} i {1}.",
      "javax.faces.validator.LongRangeValidator.TYPE": "{0}: Greška validacije: Vrijednost nije ispravnog tipa.",
      "javax.faces.validator.DoubleRangeValidator.MAXIMUM": "{1}: Greška validacije: Vrijednost je veća od dopuštenog maksimuma od '{0}'.",
      "javax.faces.validator.DoubleRangeValidator.MINIMUM": "{1}: Greška validacije: Vrijednost je manja od dopuštenog minimuma od '{0}'.",
      "javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE": "{2}: Greška validacije: Navedena vrijednost nije između očekivanih vrijednosti od {0} i {1}.",
      "javax.faces.validator.DoubleRangeValidator.TYPE": "{0}: Greška validacije: Vrijednost nije ispravnog tipa.",
      "javax.faces.converter.FloatConverter.FLOAT": "{2}: '{0}' mora biti broj sastavljen od jedne ili više znamenki.",
      "javax.faces.converter.FloatConverter.FLOAT_detail": "{2}: '{0}' mora biti broj između 1.4E-45 i 3.4028235E38. Primjer: {1}.",
      "javax.faces.converter.DateTimeConverter.DATE": "{2}: '{0}' nije moglo biti interpretirano kao datum.",
      "javax.faces.converter.DateTimeConverter.DATE_detail": "{2}: '{0}' nije moglo biti interpretirano kao datum. Primjer: {1}.",
      "javax.faces.converter.DateTimeConverter.TIME": "{2}: '{0}' nije moglo biti interpretirano kao vrijeme.",
      "javax.faces.converter.DateTimeConverter.TIME_detail": "{2}: '{0}' nije moglo biti interpretirano kao vrijeme. Primjer: {1}.",
      "javax.faces.converter.DateTimeConverter.DATETIME": "{2}: '{0}' nije moglo biti interpretirano kao datum i vrijeme.",
      "javax.faces.converter.DateTimeConverter.DATETIME_detail": "{2}: '{0}' nije moglo biti interpretirano kao datum i vrijeme. Primjer: {1}.",
      "javax.faces.converter.DateTimeConverter.PATTERN_TYPE": "{1}: Mora se navesti 'pattern' ili 'type' atribut za konverziju vrijednosti '{0}'.",
      "javax.faces.converter.NumberConverter.CURRENCY": "{2}: '{0}' nije moglo biti interpretirano kao vrijednost valute.",
      "javax.faces.converter.NumberConverter.CURRENCY_detail": "{2}: '{0}' nije moglo biti interpretirano kao vrijednost valute. Primjer: {1}.",
      "javax.faces.converter.NumberConverter.PERCENT": "{2}: '{0}' nije moglo biti interpretirano kao postotak.",
      "javax.faces.converter.NumberConverter.PERCENT_detail": "{2}: '{0}' nije moglo biti interpretirano kao postotak. Primjer: {1}.",
      "javax.faces.converter.NumberConverter.NUMBER": "{2}: '{0}' nije moglo biti interpretirano kao broj.",
      "javax.faces.converter.NumberConverter.NUMBER_detail": "{2}: '{0}' nije moglo biti interpretirano kao broj. Primjer: {1}.",
      "javax.faces.converter.NumberConverter.PATTERN": "{2}: '{0}' nije moglo biti interpretirano kao obrazac broja.",
      "javax.faces.converter.NumberConverter.PATTERN_detail": "{2}: '{0}' nije moglo biti interpretirano kao obrazac broja. Primjer: {1}.",
      "javax.faces.validator.LengthValidator.MINIMUM": "{1}: Greška validacije: Duljina je manja od dopuštenog minimuma od '{0}'.",
      "javax.faces.validator.LengthValidator.MAXIMUM": "{1}: Greška validacije: Duljina je veća od dopuštenog maksimuma od '{0}'.",
      "javax.faces.validator.RegexValidator.PATTERN_NOT_SET": "Regularni izraz mora biti postavljen.",
      "javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail": "Regularni izraz mora biti postavljen na vrijednost koja nije prazna.",
      "javax.faces.validator.RegexValidator.NOT_MATCHED": "Regularni izraz nije podudaran.",
      "javax.faces.validator.RegexValidator.NOT_MATCHED_detail": "Regularni izraz '{0}' nije podudaran.",
      "javax.faces.validator.RegexValidator.MATCH_EXCEPTION": "Greška u regularnom izrazu.",
      "javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail": "Greška u regularnom izrazu, '{0}'.",
      "primefaces.FileValidator.FILE_LIMIT": "Prelaženje maksimalnog broja datoteka.",
      "primefaces.FileValidator.FILE_LIMIT_detail": "Maksimalni broj: {0}.",
      "primefaces.FileValidator.ALLOW_TYPES": "Nevaljan tip datoteke.",
      "primefaces.FileValidator.ALLOW_TYPES_detail": "Nevaljan tip datoteke: '{0}'. Dopuštene vrste: '{1}'.",
      "primefaces.FileValidator.SIZE_LIMIT": "Nevaljana veličina datoteke.",
      "primefaces.FileValidator.SIZE_LIMIT_detail": "Datoteka '{0}' ne smije biti veća od {1}.",
      //optional for bean validation integration in client side validation
      "javax.faces.validator.BeanValidator.MESSAGE": "{0}",
      "javax.validation.constraints.AssertFalse.message": "mora biti lažno",
      "javax.validation.constraints.AssertTrue.message": "mora biti istina",
      "javax.validation.constraints.DecimalMax.message": "mora biti manje od ili jednako {0}",
      "javax.validation.constraints.DecimalMin.message": "mora biti veći ili jednak {0}",
      "javax.validation.constraints.Digits.message": "numerička vrijednost izvan granica (&lt;{0} znamenki&gt;.&lt;{1} znamenki&gt; očekuje se)",
      "javax.validation.constraints.Email.message": "mora biti dobro oblikovana adresa e-pošte",
      "javax.validation.constraints.Future.message": "mora biti budući datum",
      "javax.validation.constraints.FutureOrPresent.message": "mora biti datum u sadašnjosti ili u budućnosti",
      "javax.validation.constraints.Max.message": "mora biti manje od ili jednako {0}",
      "javax.validation.constraints.Min.message": "mora biti veći ili jednak {0}",
      "javax.validation.constraints.Negative.message": "mora biti manji od 0",
      "javax.validation.constraints.NegativeOrZero.message": "mora biti manji ili jednak 0",
      "javax.validation.constraints.NotBlank.message": "ne smije biti prazno",
      "javax.validation.constraints.NotEmpty.message": "ne smije biti prazna",
      "javax.validation.constraints.NotNull.message": "ne smije biti nula",
      "javax.validation.constraints.Null.message": "mora biti nula",
      "javax.validation.constraints.Past.message": "mora biti prošli datum",
      "javax.validation.constraints.PastOrPresent.message": "mora biti datum u prošlosti ili sadašnjosti",
      "javax.validation.constraints.Pattern.message": "mora odgovarati &#39;{0}&#39;",
      "javax.validation.constraints.Positive.message": "mora biti veći od 0",
      "javax.validation.constraints.PositiveOrZero.message": "mora biti veći ili jednak 0",
      "javax.validation.constraints.Size.message": "veličina mora biti između {0} i {1}",
    },
  });
}
