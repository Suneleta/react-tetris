import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOES } from '../tetrominoes';

const Cell = ({ type }) => (
	<StyledCell type={type} color={TETROMINOES[type].color}/>
)
//so that with every render only the changed cells are rerendered
export default React.memo(Cell);