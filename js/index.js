' use strict';

import {
  catalogBlock
} from './catalog.js';
import getHeader from './getHeader.js';
import getFooter from './getFooter.js';
import getCatalog from './getCatalog.js';
import getSubcatalog from './getSubcatalog.js';
import {
  loadData
} from './loadData.js';


getHeader();
getFooter();
getCatalog();
getSubcatalog();
loadData();


catalogBlock();