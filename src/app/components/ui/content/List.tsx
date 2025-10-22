// list component for displaying a list of items

import React, { ReactElement } from 'react';

interface ListProps<T> {
  items?: T[];
  renderItem?: (item: T, index: number) => ReactElement;
}

export default function List<T>({
  items = [],
  renderItem,
}: ListProps<T>): ReactElement {
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
