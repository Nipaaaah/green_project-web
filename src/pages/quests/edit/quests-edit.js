import React from 'react';
import AddQuest from '../add/quests-add';

const EditQuest = props => {
    const id = props.match.params.id;

    return (
        <div>
            <AddQuest id={id} />
        </div >
    )
}

export default EditQuest;