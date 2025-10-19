// list component for displaying a list of items

import React, { JSX } from 'react';

/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
interface ListProps<T> {
  items?: T[];
  renderItem?: (item: T, index: number) => JSX.Element;
}

export default function List<T>({
  items = [],
  renderItem,
}: ListProps<T>): JSX.Element {
  return (
    <ul className="divide-y divide-gray-200">
      {items.map((item, index) => (
        <li key={index} className="p-2">
          {renderItem?.(item, index)}
        </li>
      ))}
    </ul>
  );
}
