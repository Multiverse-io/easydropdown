import Dom                  from '../Renderer/Dom';
import handleBodyClick      from './Handlers/handleBodyClick';
import handleBodyMouseover  from './Handlers/handleBodyMouseover';
import handleHeadClick      from './Handlers/handleHeadClick';
import handleHeadMousedown  from './Handlers/handleHeadMousedown';
import handleHeadMouseup    from './Handlers/handleHeadMouseup';
import handleSelectBlur     from './Handlers/handleSelectBlur';
import handleSelectFocus    from './Handlers/handleSelectFocus';
import handleSelectInvalid  from './Handlers/handleSelectInvalid';
import handleSelectKeydown  from './Handlers/handleSelectKeydown';
import handleSelectKeypress from './Handlers/handleSelectKeypress';
import handleWindowClick    from './Handlers/handleWindowClick';
import IEventBinding        from './Interfaces/IEventBinding';

const getEventsList = (dom: Dom): IEventBinding[] => [
    {
        target: dom.head,
        type: 'click',
        handler: handleHeadClick
    },
    {
        target: dom.head,
        type: 'mousedown',
        handler: handleHeadMousedown
    },
    {
        target: dom.head,
        type: 'mouseup',
        handler: handleHeadMouseup
    },
    {
        target: document.documentElement,
        type: 'click',
        handler: handleWindowClick
    },
    {
        target: dom.body,
        type: 'click',
        handler: handleBodyClick
    },
    {
        target: dom.body,
        type: 'mouseover',
        handler: handleBodyMouseover
    },
    {
        target: dom.select,
        type: 'keydown',
        handler: handleSelectKeydown
    },
    {
        target: dom.select,
        type: 'invalid',
        handler: handleSelectInvalid
    },
    {
        target: dom.select,
        type: 'keypress',
        handler: handleSelectKeypress
    },
    {
        target: dom.select,
        type: 'focus',
        handler: handleSelectFocus
    },
    {
        target: dom.select,
        type: 'blur',
        handler: handleSelectBlur
    }
];

export default getEventsList;