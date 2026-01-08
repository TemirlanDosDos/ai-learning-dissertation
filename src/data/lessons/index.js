// Сабақтарды импорттау
import lesson01 from './lesson01';
import lesson02 from './lesson02';
import lesson03 from './lesson03';
import lesson04 from './lesson04';
import lesson05 from './lesson05';
import lesson06 from './lesson06';
import lesson07 from './lesson07';
import lesson08 from './lesson08';
import lesson09 from './lesson09';
import lesson10 from './lesson10';
import lesson11 from './lesson11';
import lesson12 from './lesson12';
import lesson13 from './lesson13';
import lesson14 from './lesson14';
import lesson15 from './lesson15';
import lesson16 from './lesson16';
import lesson17 from './lesson17';
import lesson18 from './lesson18';
import lesson19 from './lesson19';
import lesson20 from './lesson20';
import lesson21 from './lesson21';
import lesson22 from './lesson22';
import lesson23 from './lesson23';
import lesson24 from './lesson24';
import lesson25 from './lesson25';
import lesson26 from './lesson26';
import lesson27 from './lesson27';
import lesson28 from './lesson28';
import lesson29 from './lesson29';
import lesson30 from './lesson30';
import lesson31 from './lesson31';
import lesson32 from './lesson32';
import lesson33 from './lesson33';
import lesson34 from './lesson34';

/**
 * Барлық сабақтардың жиынтық массиві.
 * Жаңа сабақ қосылғанда осы тізімге қосу керек.
 */
const lessons = [
    lesson01,
    lesson02,
    lesson03,
    lesson04,
    lesson05,
    lesson06,
    lesson07,
    lesson08,
    lesson09,
    lesson10,
    lesson11,
    lesson12,
    lesson13,
    lesson14,
    lesson15,
    lesson16,
    lesson17,
    lesson18,
    lesson19,
    lesson20,
    lesson21,
    lesson22,
    lesson23,
    lesson24,
    lesson25,
    lesson26,
    lesson27,
    lesson28,
    lesson29,
    lesson30,
    lesson31,
    lesson32,
    lesson33,
    lesson34,
];

// Курстың жалпы статистикасын немесе мета-деректерін алу үшін көмекші функциялар
export const getLessonById = (id) => lessons.find(lesson => lesson.id === id);
export const totalLessons = lessons.length;

export default lessons;