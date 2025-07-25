import 'server-only'

const dictionaries = {
    'es-ES': () => import('./dictionaries/es.json').then((module) => module.default),
    'en-US': () => import('./dictionaries/en.json').then((module) => module.default),
    'ru': () => import('./dictionaries/ru.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'en-US' | 'es-ES' | 'ru') => 
dictionaries[locale]();