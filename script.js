document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let score = 0;

    // Question 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1) {
        if (q1.value === 'Да') {
            score += 1;
        }
    }

    // Question 2
    const q2 = document.querySelector('input[name="q2"]').value.trim().toLowerCase();
    if (q2 === 'тьюринга') {
        score += 1;
    }

    // Question 3
    const q3 = document.querySelector('select[name="q3"]').value;
    if (q3 === 'dna') {
        score += 1;
    }



    // Question 4
    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4) {
        if (q4.value === 'Наблюдаемое и ненаблюдаемое обучение') {
            score += 1;
        }
    }

    // Question 5
    const q5 = document.querySelector('input[name="q5"]:checked');
    if (q5) {
        if (q5.value === 'Все перечисленные варианты') {
            score += 1;
        }
    }

    // Question 6
    const q6 = document.querySelector('input[name="q6"]:checked');
    if (q6) {
        if (q6.value === 'Процесс, при котором модель становится слишком сложной и не способна обобщать данные') {
            score += 1;
        }
    }


    // Question 7
    const q7 = document.querySelector('input[name="q7"]:checked');
    if (q7) {
        if (q7.value === 'Все перечисленные варианты') {
            score += 1;
        }
    }


    // Question 8
    const q8 = document.querySelector('input[name="q8"]:checked');
    if (q8) {
        if (q8.value === 'Деревья решений и случайный лес') {
            score += 1;
        }
    }

    // Question 9
    const q9 = document.querySelector('input[name="q9"]').value.trim().toLowerCase();
    if (q9 === 'нейронов') {
        score += 1;
    }


    // Question 10
    const q10 = document.querySelector('select[name="q10"]').value;
    if (q10 === 'svm') {
        score += 1;
    }

    // Question 11
    const q11 = document.querySelector('input[name="q11"]:checked');
    if (q11) {
        if (q11.value === 'Все перечисленные варианты') {
            score += 1;
        }
    }


    // Question 12
    const q12 = document.querySelector('input[name="q12"]:checked');
    if (q12) {
        if (q12.value === 'Все перечисленные варианты') {
            score += 1;
        }
    }

    // Question 13
    const q13 = document.querySelector('input[name="q13"]:checked');
    if (q13) {
        if (q13.value === 'Сигмоидальная функция') {
            score += 1;
        }
    }


    // Question 14
    const q14 = document.querySelector('input[name="q14"]').value.trim().toLowerCase();
    if (q14 === 'accuracy') {
        score += 1;
    }

    // Question 15
    const q15 = document.querySelector('select[name="q15"]').value;
    if (q15 === 'dna') {
        score += 1;
    }

    // Question 16
    const q16 = document.querySelector('select[name="q16"]').value;
    if (q16 === 'tree') {
        score += 1;
    }


    // Question 17
    const q17 = document.querySelector('select[name="q17"]').value;
    if (q17 === 'tree') {
        score += 1;
    }


    // Question 18
    const q18 = document.querySelector('select[name="q18"]').value;
    if (q18 === 'svm') {
        score += 1;
    }        

    // Question 19
    const q19 = document.querySelector('select[name="q19"]').value;
    if (q19 === 'svm') {
        score += 1;
    }

    // Question 20
    const q20 = document.querySelector('select[name="q20"]').value;
    if (q20 === 'tree') {
        score += 1;
    }


    // Question 21
    const q21 = document.querySelector('select[name="q21"]').value;
    if (q21 === 'tree') {
        score += 1;
    }

    // Question 22
    const q22 = document.querySelector('select[name="q22"]').value;
    if (q22 === 'tree') {
        score += 1;
    }



    // Question 23
    const q23 = document.querySelector('input[name="q23"]:checked');
    if (q23) {
        if (q23.value === 'K-means') {
            score += 1;
        }
    }

    // Question 24
    const q24 = document.querySelector('input[name="q24"]:checked');
    if (q24) {
        if (q24.value === 'Principal Component Analysis (PCA)') {
            score += 1;
        }
    }

    // Question 25
    const q25 = document.querySelector('select[name="q25"]').value;
    if (q25 === 'dna') {
        score += 1;
    }    

    // Question 26
    const q26 = document.querySelector('select[name="q26"]').value;
    if (q26 === 'svm') {
        score += 1;
    }

    // Question 27
    const q27 = document.querySelector('select[name="q27"]').value;
    if (q27 === 'tree') {
        score += 1;
    }

    // Question 28
    const q28 = document.querySelector('select[name="q28"]').value;
    if (q28 === 'svm') {
        score += 1;
    }


    // Question 29
    const q29 = document.querySelector('select[name="q29"]').value;
    if (q29 === 'dna') {
        score += 1;
    }
    

    // Question 30
    const q30 = document.querySelector('select[name="q30"]').value;
    if (q30 === 'knn') {
        score += 1;
    }

    // Question 31
    const q31 = document.querySelector('select[name="q31"]').value;
    if (q31 === 'svm') {
        score += 1;
    }


    // Question 32
    const q32 = document.querySelector('input[name="q32"]:checked');
    if (q32) {
        if (q32.value === 'Нет') {
            score += 1;
        }
    }


    // Question 33
    const q33 = document.querySelector('input[name="q33"]:checked');
    if (q33) {
        if (q33.value === 'Да') {
            score += 1;
        }
    }


    // Question 34
    const q34 = document.querySelector('input[name="q34"]:checked');
    if (q34) {
        if (q34.value === 'Да') {
            score += 1;
        }
    }

    // Question 35
    const q35 = document.querySelector('input[name="q35"]:checked');
    if (q35) {
        if (q35.value === 'Да') {
            score += 1;
        }
    }


    // Question 36
    const q36 = document.querySelector('select[name="q36"]').value;
    if (q36 === 'knn') {
        score += 1;
    }


    // Question 37
    const q37 = document.querySelector('select[name="q37"]').value;
    if (q37 === 'svm') {
        score += 1;
    }

    // Question 38
    const q38 = document.querySelector('select[name="q38"]').value;
    if (q38 === 'knn') {
        score += 1;
    }

    // Question 39
    const q39 = document.querySelector('select[name="q39"]').value;
    if (q39 === 'knn') {
        score += 1;
    }

    // Question 40
    const q40 = document.querySelector('select[name="q40"]').value;
    if (q40 === 'dna') {
        score += 1;
    }

    // Question 41
    const q41 = document.querySelector('input[name="q41"]:checked');
    if (q41) {
        if (q41.value === 'Экспоненциальное сглаживание') {
            score += 1;
        }
    }


    // Question 42
    const q42 = document.querySelector('input[name="q42"]:checked');
    if (q42) {
        if (q42.value === 'ARIMA') {
            score += 1;
        }
    }

    // Question 43
    const q43 = document.querySelector('input[name="q43"]:checked');
    if (q43) {
        if (q43.value === 'GARCH') {
            score += 1;
        }
    }

    // Question 44
    const q44 = document.querySelector('input[name="q44"]:checked');
    if (q44) {
        if (q44.value === 'VAR (векторная авторегрессия)') {
            score += 1;
        }
    }


    // Question 45
    const q45 = document.querySelector('select[name="q45"]').value;
    if (q45 === 'knn') {
        score += 1;
    }

    // Question 46
    const q46 = document.querySelector('select[name="q46"]').value;
    if (q46 === 'dna') {
        score += 1;
    }

    // Question 47
    const q47 = document.querySelector('select[name="q47"]').value;
    if (q47 === 'knn') {
        score += 1;
    }

    // Question 48
    const q48 = document.querySelector('select[name="q48"]').value;
    if (q48 === 'knn') {
        score += 1;
    }

    // Question 49
    const q49 = document.querySelector('select[name="q49"]').value;
    if (q49 === 'knn') {
        score += 1;
    }

    // Question 50
    const q50 = document.querySelector('input[name="q50"]').value.trim().toLowerCase();
    if (q50 === 'бустинг') {
        score += 1;
    }

    // Question 51
    const q51 = document.querySelector('input[name="q51"]:checked');
    if (q51) {
        if (q51.value === 'Matplotlib') {
            score += 1;
        }
    }


    // Question 52
    const q52 = document.querySelector('input[name="q52"]:checked');
    if (q52) {
        if (q52.value === 'Pandas') {
            score += 1;
        }
    }


    // Question 53
    const q53 = document.querySelector('input[name="q53"]:checked');
    if (q53) {
        if (q53.value === 'TensorFlow') {
            score += 1;
        }
    }


    // Question 54
    const q54 = document.querySelector('input[name="q54"]:checked');
    if (q54) {
        if (q54.value === 'Train_test_split') {
            score += 1;
        }
    }


    // Question 55
    const q55 = document.querySelector('input[name="q55"]:checked');
    if (q55) {
        if (q55.value === 'GridSearchCV') {
            score += 1;
        }
    }



    // Question 56
    const q56 = document.querySelector('select[name="q56"]').value;
    if (q56 === 'svm') {
        score += 1;
    }


    // Question 57
    const q57 = document.querySelector('select[name="q57"]').value;
    if (q57 === 'svm') {
        score += 1;
    }


    // Question 58
    const q58 = document.querySelector('select[name="q58"]').value;
    if (q58 === 'knn') {
        score += 1;
    }


    // Question 59
    const q59 = document.querySelector('select[name="q59"]').value;
    if (q59 === 'svm') {
        score += 1;
    }

    // Question 60
    const q60 = document.querySelector('select[name="q60"]').value;
    if (q60 === 'svm') {
        score += 1;
    }

    // Question 61
    const q61 = document.querySelector('select[name="q61"]').value;
    if (q61 === 'svm') {
        score += 1;
    }


    // Question 62
    const q62 = document.querySelector('select[name="q62"]').value;
    if (q62 === 'knn') {
        score += 1;
    }

    // Question 63
    const q63 = document.querySelector('select[name="q63"]').value;
    if (q63 === 'dna') {
        score += 1;
    }

    // Question 64
    const q64 = document.querySelector('select[name="q64"]').value;
    if (q64 === 'svm') {
        score += 1;
    }

    // Question 65
    const q65 = document.querySelector('select[name="q65"]').value;
    if (q65 === 'svm') {
        score += 1;
    }


    // Question 66
    const q66 = document.querySelector('select[name="q66"]').value;
    if (q66 === 'knn') {
        score += 1;
    }

    // Question 67
    const q67 = document.querySelector('select[name="q67"]').value;
    if (q67 === 'dna') {
        score += 1;
    }


    // Question 68
    const q68 = document.querySelector('select[name="q68"]').value;
    if (q68 === 'svm') {
        score += 1;
    }

    // Question 69
    const q69 = document.querySelector('select[name="q69"]').value;
    if (q69 === 'svm') {
        score += 1;
    }

    // Question 70
    const q70 = document.querySelector('input[name="q70"]').value.trim().toLowerCase();
    if (q70 === 'хранилище') {
        score += 1;
    }

    // Question 71
    const q71 = document.querySelector('input[name="q71"]').value.trim().toLowerCase();
    if (q71 === 'hdf5') {
        score += 1;
    }

    // Question 72
    const q72 = document.querySelector('input[name="q72"]').value.trim().toLowerCase();
    if (q72 === 'распределенные') {
        score += 1;
    }


    // Question 73
    const q73 = document.querySelector('input[name="q73"]').value.trim().toLowerCase();
    if (q73 === 'датасеты') {
        score += 1;
    }

    // Question 74
    const q74 = document.querySelector('input[name="q74"]').value.trim().toLowerCase();
    if (q74 === 'кэшируемые') {
        score += 1;
    }

     // Question 75
     const q75 = document.querySelector('input[name="q75"]').value.trim().toLowerCase();
     if (q75 === 'разреженные') {
         score += 1;
     }

     // Question 76
     const q76 = document.querySelector('input[name="q76"]').value.trim().toLowerCase();
     if (q76 === 'csv') {
         score += 1;
     }

     // Question 77
     const q77 = document.querySelector('input[name="q77"]').value.trim().toLowerCase();
     if (q77 === 'временные') {
         score += 1;
     }

     
     // Question 78
    const q78 = document.querySelector('input[name="q78"]:checked');
    if (q78) {
        if (q78.value === 'TensorFlow') {
            score += 1;
        }
    }

    // Question 79
    const q79 = document.querySelector('input[name="q79"]:checked');
    if (q79) {
        if (q79.value === 'PyTorch') {
            score += 1;
        }
    }


    // Question 80
    const q80 = document.querySelector('input[name="q80"]:checked');
    if (q80) {
        if (q80.value === 'Keras') {
            score += 1;
        }
    }

    // Question 81
    const q81 = document.querySelector('input[name="q81"]:checked');
    if (q81) {
        if (q81.value === 'Django') {
            score += 1;
        }
    }

    // Question 82
    const q82 = document.querySelector('input[name="q82"]:checked');
    if (q82) {
        if (q82.value === 'TensorFlow Serving') {
            score += 1;
        }
    }

    // Question 83
    const q83 = document.querySelector('input[name="q83"]:checked');
    if (q83) {
        if (q83.value === 'Pandas') {
            score += 1;
        }
    }


    // Question 84
    const q84 = document.querySelector('input[name="q84"]:checked');
    if (q84) {
        if (q84.value === 'Matplotlib') {
            score += 1;
        }
    }


    // Question 85
    const q85 = document.querySelector('input[name="q85"]:checked');
    if (q85) {
        if (q85.value === 'TensorFlow Hub') {
            score += 1;
        }
    }


    // Question 86
    const q86 = document.querySelector('input[name="q86"]:checked');
    if (q86) {
        if (q86.value === 'Amazon SageMaker') {
            score += 1;
        }
    }

    // Question 87
    const q87 = document.querySelector('input[name="q87"]:checked');
    if (q87) {
        if (q87.value === 'AutoML') {
            score += 1;
        }
    }

    // Question 88
    const q88 = document.querySelector('input[name="q88"]').value.trim().toLowerCase();
    if (q88 === 'python') {
        score += 1;
    }

    // Question 89
    const q89 = document.querySelector('input[name="q89"]').value.trim().toLowerCase();
    if (q89 === 'tensor') {
        score += 1;
    }

    // Question 90
    const q90 = document.querySelector('input[name="q90"]:checked');
    if (q90) {
        if (q90.value === 'torch.optim') {
            score += 1;
        }
    }


    // Question 91
    const q91 = document.querySelector('input[name="q91"]:checked');
    if (q91) {
        if (q91.value === 'DataLoader') {
            score += 1;
        }
    }

    // Question 92
    const q92 = document.querySelector('select[name="q92"]').value;
    if (q92 === 'svm') {
        score += 1;
    }

    // Question 93
    const q93 = document.querySelector('select[name="q93"]').value;
    if (q93 === 'svm') {
        score += 1;
    }


    // Question 94
    const q94 = document.querySelector('input[name="q94"]:checked');
    if (q94) {
        if (q94.value === 'to cuda') {
            score += 1;
        }
    }

    // Question 95
    const q95 = document.querySelector('input[name="q95"]:checked');
    if (q95) {
        if (q95.value === 'Machine Learning') {
            score += 1;
        }
    }


    // Question 96
    const q96 = document.querySelector('input[name="q96"]:checked');
    if (q96) {
        if (q96.value === 'Линейная регрессия') {
            score += 1;
        }
    }

    // Question 97
    const q97 = document.querySelector('input[name="q97"]').value.trim().toLowerCase();
    if (q97 === 'google') {
        score += 1;
    }


    // Question 98
    const q98 = document.querySelector('select[name="q98"]').value;
    if (q98 === 'knn') {
        score += 1;
    }


    // Question 99
    const q99 = document.querySelector('input[name="q99"]:checked');
    if (q99) {
        if (q99.value === '1950') {
            score += 1;
        }
    }


    // Question 100
    const q100 = document.querySelector('input[name="q100"]:checked');
    if (q100) {
        if (q100.value === 'Alan Turing') {
            score += 1;
        }
    }

    // Question 101
    const q101 = document.querySelector('select[name="q101"]').value;
    if (q101 === 'svm') {
        score += 1;
    }


    // Question 102
    const q102 = document.querySelector('select[name="q102"]').value;
    if (q102 === 'dna') {
        score += 1;
    }



    // Display result
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = `Your score: ${score}/100`;
});
