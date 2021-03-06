/* ---------------------------------------------------------------------------*/

import React from 'react';

/* ---------------------------------------------------------------------------*/

export const ListItem = ({style, item}) => (
  <li className={style + '-item'}>
    <a className={style + '-item-link'} href={item.url}>
      {item.label}
    </a>
    .
  </li>
);

/* ---------------------------------------------------------------------------*/
