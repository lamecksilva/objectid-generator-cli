#!/usr/bin/env node

import boxen from 'boxen';

const generateObjectId = (
	m = Math,
	d = Date,
	h = 16,
	s = (s) => m.floor(s).toString(h)
) => s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h));

const oid = generateObjectId();

console.log(boxen(oid, { padding: 1 }));
