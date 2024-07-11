const memo = (callback) => {
  // здесь будем хранить результаты вызовов функции
  const cache = {};

  // ну вот и понадобилось замыкание:)
  return (...args) => {
    // тут создаем ключ, по которому достанем/сохраним результат
    // можно лучше, но сделаем пока что так
    const key = JSON.stringify(args);

    // очевидно достаем кэш, если он есть
    if (key in cache) {
      return cache[key];
    }

    const result = callback(...args);
    cache[key] = result; // кэшируем

    return result;
  };
};

const sum = (a, b) => {
  console.log("Call sum", a, b);

  return a + b;
};

// мемоизируем функцию
const memoSum = memo(sum);

// проверяем
memoSum(1, 2);
memoSum(100, 31);
memoSum(1, 2);
memoSum(1, 2);
memoSum(1, 2);
memoSum(0, 9);
