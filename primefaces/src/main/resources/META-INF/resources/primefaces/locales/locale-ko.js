/** Korean */
PrimeFaces.locales['ko'] = {
    "startsWith": "으로 시작하는",
    "contains": "포함하는",
    "notContains": "포함하지 않는",
    "endsWith": "으로 끝나는",
    "equals": "같은",
    "notEquals": "같지 않는",
    "noFilter": "필터하지 않은",
    "filter": "필터",
    "lt": "보다 작은",
    "lte": "보다 같거나 작은",
    "gt": "보다 큰",
    "gte": "보다 같거나 큰",
    "dateIs": "날짜가 같은",
    "dateIsNot": "날짜가 같지 않은",
    "dateBefore": "날짜 전",
    "dateAfter": "날짜 후",
    "custom": "커스텀",
    "clear": "초기화",
    "apply": "적용",
    "matchAll": "모두 맞는",
    "matchAny": "하나라도 맞는",
    "addRule": "규칙 추가",
    "removeRule": "규칙 제거",
    "accept": "예",
    "reject": "아니오",
    "choose": "선택",
    "upload": "업로드",
    "cancel": "취소",
    "completed": "완료",
    "pending": "대기",
    "dayNames": ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
    "dayNamesShort": ["일", "월", "화", "수", "목", "금", "토"],
    "dayNamesMin": ["일", "월", "화", "수", "목", "금", "토"],
    "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    "monthNamesShort": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    "chooseYear": "년을 선택하세요",
    "chooseMonth": "월을 선택하세요",
    "chooseDate": "일을 선택하세요",
    "prevDecade": "10년 전",
    "nextDecade": "10년 후",
    "prevYear": "작년",
    "nextYear": "내년",
    "prevMonth": "전달",
    "nextMonth": "다음달",
    "prevHour": "이전 시간",
    "nextHour": "다음 시간",
    "prevMinute": "이전 분",
    "nextMinute": "다음 분",
    "prevSecond": "이전 초",
    "nextSecond": "다음 초",
    "am": "AM",
    "pm": "PM",
    "today": "오늘",
    "weekHeader": "Wk",
    "firstDayOfWeek": 0,
    "showMonthAfterYear": false,
    "dateFormat": "mm/dd/yy",
    "weak": "약함",
    "medium": "보통",
    "strong": "강함",
    "passwordPrompt": "패스워드를 입력하세요",
    "emptyFilterMessage": "결과가 없습니다.",
    "searchMessage": "{0} 개 사용 가능",
    "selectionMessage": "{0} 개 선택",
    "emptySelectionMessage": "선택되지 않았습니다",
    "emptySearchMessage": "결과가 없습니다",
    "emptyMessage": "가능한 선택이 없습니다.",
    "aria": {
        "trueLabel": "참",
        "falseLabel": "거짓",
        "nullLabel": "선택되지 않음",
        "star": "별 1개",
        "stars": "별 {star}개",
        "selectAll": "모두 선택",
        "unselectAll": "모두 선택되지 않음",
        "close": "닫기",
        "previous": "이전",
        "next": "다음",
        "navigation": "네비게이션",
        "scrollTop": "스크롤 위로",
        "moveTop": "맨위로 이동",
        "moveUp": "위로 이동",
        "moveDown": "아래로 이동",
        "moveBottom": "맨아래로 이동",
        "moveToTarget": "타겟으로 이동",
        "moveToSource": "소스로 이동",
        "moveAllToTarget": "타겟으로 모두 이동",
        "moveAllToSource": "소스로 모두 이동",
        "pageLabel": "페이지 {page}",
        "firstPageLabel": "첫 페이지",
        "lastPageLabel": "마지막 페이지",
        "nextPageLabel": "다음 페이지",
        "previousPageLabel": "이전 페이지",
        "rowsPerPageLabel": "페이지별 행 수",
        "jumpToPageDropdownLabel": "페이지 드롭다운라벨로 점프",
        "jumpToPageInputLabel": "페이지 입력라벨로 점프",
        "selectRow": "행 선택됨",
        "unselectRow": "행 선택되지 않음",
        "expandRow": "행 확장됨",
        "collapseRow": "행 접힘",
        "showFilterMenu": "필터 메뉴 보이기",
        "hideFilterMenu": "필터 메뉴 숨기기",
        "filterOperator": "필터 Operator",
        "filterConstraint": "필터 Constraint",
        "editRow": "행 편집",
        "saveEdit": "편집 저장",
        "cancelEdit": "편집 취소",
        "listView": "리스트 보기",
        "gridView": "그리드 보기",
        "slide": "슬라이드",
        "slideNumber": "{slideNumber}",
        "zoomImage": "확대/축소 이미지",
        "zoomIn": "확대",
        "zoomOut": "축소",
        "rotateRight": "오른쪽으로 회전",
        "rotateLeft": "왼쪽으로 회전"
    }
};


// custom PF labels
PrimeFaces.locales['ko'] = $.extend(true, {}, PrimeFaces.locales['ko'], {
    isRTL: false,
    yearSuffix: "",
    timeOnlyTitle: "시간만",
    timeText: "시간",
    hourText: "시",
    minuteText: "분",
    secondText: "초",
    millisecondText: '밀리초',
    today: "현재 날짜",
    year: "년",
    month: "월",
    week: "주",
    day: "요일",
    list: "의제",
    allDayText: "하루종일",
    moreLinkText: "더...",
    noEventsText: "사건 없음",
    aria: {
        'datatable.sort.ASC': '활성화하여 열 오름차순 정렬',
        'datatable.sort.DESC': '활성화하여 열 내림차순 정렬'
    },
    messages: { //optional for Client Side Validation
        'javax.faces.component.UIInput.REQUIRED': '{0}: 유효성 검사 오류: 값이 필요랍니다.',
        'javax.faces.converter.IntegerConverter.INTEGER': '{2}: \'{0}\' 하나 이상의 숫자로 구성된 숫자여야 합니다.',
        'javax.faces.converter.IntegerConverter.INTEGER_detail': '{2}: \'{0}\' -2147483648 에서 2147483647 사이의 숫자여야 합니다. 본보기: {1}.',
        'javax.faces.converter.DoubleConverter.DOUBLE': '{2}: \'{0}\' 하나 이상의 숫자로 구성된 숫자여야 합니다.',
        'javax.faces.converter.DoubleConverter.DOUBLE_detail': '{2}: \'{0}\' 4.9E-324 에서 1.7976931348623157E308 사이의 숫자여야 합니다. 본보기: {1}.',
        'javax.faces.converter.BigDecimalConverter.DECIMAL': '{2}: \'{0}\' 부호 있는 소수점 숫자여야 합니다.',
        'javax.faces.converter.BigDecimalConverter.DECIMAL_detail': '{2}: \'{0}\' 0자리 이상으로 구성된 부호 있는 소수점 숫자여야 하며 소수점 및 분수 뒤에 올 수 있습니다. 본보기: {1}.',
        'javax.faces.converter.BigIntegerConverter.BIGINTEGER': '{2}: \'{0}\' 하나 이상의 숫자로 구성된 숫자여야 합니다.',
        'javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail': '{2}: \'{0}\' 하나 이상의 숫자로 구성된 숫자여야 합니다. 본보기: {1}.',
        'javax.faces.converter.ByteConverter.BYTE': '{2}: \'{0}\' 0 에서 255 사이의 숫자여야 합니다.',
        'javax.faces.converter.ByteConverter.BYTE_detail': '{2}: \'{0}\' 0 에서 255 사이의 숫자여야 합니다. 본보기: {1}.',
        'javax.faces.converter.CharacterConverter.CHARACTER': '{1}: \'{0}\' 유효한 문자여야 합니다.',
        'javax.faces.converter.CharacterConverter.CHARACTER_detail': '{1}: \'{0}\' 유효한 ASCII 문자여야 합니다.',
        'javax.faces.converter.ShortConverter.SHORT': '{2}: \'{0}\' 하나 이상의 숫자로 구성된 숫자여야 합니다.',
        'javax.faces.converter.ShortConverter.SHORT_detail': '{2}: \'{0}\' -32768 에서 32767 사이의 숫자여야 합니다. 본보기: {1}.',
        'javax.faces.converter.BooleanConverter.BOOLEAN': '{1}: \'{0}\' \'true\' 또는 \'false\'이어야 합니다.',
        'javax.faces.converter.BooleanConverter.BOOLEAN_detail': '{1}: \'{0}\' \'true\' 또는 \'false\'이어야 합니다. \'true\' 이외의 값은 \'false\'으로 평가됩니다.',
        'javax.faces.validator.LongRangeValidator.MAXIMUM': '{1}: 유효성 검사 오류: 값이 허용되는 최대값 \'{0}\'보다 큽니다.',
        'javax.faces.validator.LongRangeValidator.MINIMUM': '{1}: 유효성 검사 오류: 값이 허용되는 최소값 \'{0}\'보다 작습니다.',
        'javax.faces.validator.LongRangeValidator.NOT_IN_RANGE': '{2}: 유효성 검사 오류: 지정한 특성이 {0}과 {1}의 예상 값 사이에 있지 않습니다.',
        'javax.faces.validator.LongRangeValidator.TYPE': '{0}: 유효성 검사 오류: 값이 올바른 유형이 아닙니다.',
        'javax.faces.validator.DoubleRangeValidator.MAXIMUM': '{1}: 유효성 검사 오류: 값이 허용되는 최대값 \'{0}\'보다 큽니다.',
        'javax.faces.validator.DoubleRangeValidator.MINIMUM': '{1}: 유효성 검사 오류: 값이 허용되는 최소값 \'{0}\'보다 작습니다.',
        'javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE': '{2}: 유효성 검사 오류: 지정한 특성이 {0}과 {1}의 예상 값 사이에 있지 않습니다.',
        'javax.faces.validator.DoubleRangeValidator.TYPE': '{0}: 유효성 검사 오류: 값이 올바른 유형이 아닙니다.',
        'javax.faces.converter.FloatConverter.FLOAT': '{2}: \'{0}\' 하나 이상의 숫자로 구성된 숫자여야 합니다.',
        'javax.faces.converter.FloatConverter.FLOAT_detail': '{2}: \'{0}\' 1.4E-45 에서 3.4028235E38 사이의 숫자여야 합니다. 본보기: {1}.',
        'javax.faces.converter.DateTimeConverter.DATE': '{2}: \'{0}\' 날짜로 이해할 수 없습니다.',
        'javax.faces.converter.DateTimeConverter.DATE_detail': '{2}: \'{0}\' 날짜로 이해할 수 없습니다. 본보기: {1}.',
        'javax.faces.converter.DateTimeConverter.TIME': '{2}: \'{0}\' 시간으로 이해할 수 없습니다.',
        'javax.faces.converter.DateTimeConverter.TIME_detail': '{2}: \'{0}\' 시간으로 이해할 수 없습니다. 본보기: {1}.',
        'javax.faces.converter.DateTimeConverter.DATETIME': '{2}: \'{0}\' 날짜 및 시간으로 이해할 수 없습니다.',
        'javax.faces.converter.DateTimeConverter.DATETIME_detail': '{2}: \'{0}\' 날짜 및 시간으로 이해할 수 없습니다. 본보기: {1}.',
        'javax.faces.converter.DateTimeConverter.PATTERN_TYPE': '{1}: 값 \'{0}\'을 변환하려면 \'pattern\' 또는 \'type\' 속성을 지정해야 합니다.',
        'javax.faces.converter.NumberConverter.CURRENCY': '{2}: \'{0}\' 통화 값으로 이해할 수 없습니다.',
        'javax.faces.converter.NumberConverter.CURRENCY_detail': '{2}: \'{0}\' 통화 값으로 이해할 수 없습니다. 본보기: {1}.',
        'javax.faces.converter.NumberConverter.PERCENT': '{2}: \'{0}\' 백분율로 이해할 수 없습니다.',
        'javax.faces.converter.NumberConverter.PERCENT_detail': '{2}: \'{0}\' 백분율로 이해할 수 없습니다. 본보기: {1}.',
        'javax.faces.converter.NumberConverter.NUMBER': '{2}: \'{0}\' 숫자로 이해할 수 없습니다.',
        'javax.faces.converter.NumberConverter.NUMBER_detail': '{2}: \'{0}\' 숫자로 이해할 수 없습니다. 본보기: {1}.',
        'javax.faces.converter.NumberConverter.PATTERN': '{2}: \'{0}\' 숫자 패턴으로 이해할 수 없습니다.',
        'javax.faces.converter.NumberConverter.PATTERN_detail': '{2}: \'{0}\' 숫자 패턴으로 이해할 없습니다. 본보기: {1}.',
        'javax.faces.validator.LengthValidator.MINIMUM': '{1}: 유효성 검사 오류: 길이가 허용되는 최소값 \'{0}\'보다 작습니다.',
        'javax.faces.validator.LengthValidator.MAXIMUM': '{1}: 유효성 검사 오류: 길이가 허용되는 최대값 \'{0}\'보다 큽니다.',
        'javax.faces.validator.RegexValidator.PATTERN_NOT_SET': '정규식 패턴을 설정해야 합니다',
        'javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail': '장규식 패턴을 비어 있지 않은 값으로 설정해야 합니다.',
        'javax.faces.validator.RegexValidator.NOT_MATCHED': '정규식 패턴이 일치하지 않습니다.',
        'javax.faces.validator.RegexValidator.NOT_MATCHED_detail': '자규식  패턴 \'{0}\'가 일치하지 않습니다.',
        'javax.faces.validator.RegexValidator.MATCH_EXCEPTION': '정규식에 오류가 있습니다.',
        'javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail': '정규식에 오류가 있습니다, \'{0}\'.',
        //optional for bean validation integration in client side validation
        'javax.faces.validator.BeanValidator.MESSAGE': '{0}',
        'javax.validation.constraints.AssertFalse.message': '거짓이어야 합니다.',
        'javax.validation.constraints.AssertTrue.message': '참이어야 합니다.',
        'javax.validation.constraints.DecimalMax.message': '{0}보다 작거나 같아야 합니다.',
        'javax.validation.constraints.DecimalMin.message': '{0}보다 크거나 같아야 합니다.',
        'javax.validation.constraints.Digits.message': '숫자 값이 범위를 벗어났습니다 (&lt;{0} 숫자&gt;.&lt;{1} 숫자&gt; 기대했습니다).',
        'javax.validation.constraints.Future.message': '미래여야 합니다.',
        'javax.validation.constraints.Max.message': '{0}보다 작거나 같아야 합니다.',
        'javax.validation.constraints.Min.message': '{0}보다 크거나 같아야 합니다.',
        'javax.validation.constraints.NotNull.message': 'null이 아닐 수 있습니다.',
        'javax.validation.constraints.Null.message': 'null이어야 합니다.',
        'javax.validation.constraints.Past.message': '과거임에 틀림없습니다.',
        'javax.validation.constraints.Pattern.message': '"{0}"과 일치해야 합니다.',
        'javax.validation.constraints.Size.message': '크기는 {0}에서 {1} 사이여야 합니다.'
    }
});
PrimeFaces.locales['kr_KR'] = PrimeFaces.locales['kr'];