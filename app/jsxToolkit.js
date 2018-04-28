const React = require('react')

const defaultListStyleType = "circle"

export function arrayToList(array, liststyletype) {
    const listStyle = liststyletype || defaultListStyleType;
    return array.map((a, i) => <li key={i} style={{ listStyleType: listStyle }}>{a}</li>);
}