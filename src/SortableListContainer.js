import React from "react";
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import List from "./List";

const SortableListContainer = sortableContainer(({children}) => {return <List>{children}</List>});

