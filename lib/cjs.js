const {default: Draggable, DraggableCore} = require('./Draggable');

// Previous versions of this lib exported <Draggable> as the root export. As to no-// them, or TypeScript, we export *both* as the root and as 'default'.
// See https://github.com/mzabriskie/powerai-react-draggable-v2/pull/254
// and https://github.com/mzabriskie/powerai-react-draggable-v2/issues/266
module.exports = Draggable;
module.exports.default = Draggable;
module.exports.DraggableCore = DraggableCore;
