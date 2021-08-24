import React, { useEffect, useCallback, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { uploadIcon } from '../../assets';

interface FileUploadFieldProps {
    id: string;
    index: number;
    isDragDisabled?: boolean;
    getFile: Function;
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px dotted black;
    border-radius: 20px;
    width: 15vh;
    height: 3vh;
    align-items: center;
    margin-bottom: 3vh;
    padding: 5px;
    background-color: white;
`;
const Icon = styled.img`
    margin-right: 2vh;
`;
const Uploader = styled.input`
    opacity: 0;
    width: 4px;
`;
const Text = styled.label`
    font-size: 12px;
    font-weight: normal;
`;

const FileUpload = ({
    id,
    index,
    isDragDisabled,
    getFile
}: FileUploadFieldProps) => {
    const [file, setFile] = useState(null);

    const memoisedCallback = useCallback(() => {
        getFile(file);
    }, [file, getFile])

    useEffect(() => {
        memoisedCallback();
    });

    return (
        <Draggable draggableId={id} index={index} isDragDisabled={isDragDisabled}>
            {
                (provided) => (
                    <Container
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <Icon src={uploadIcon} alt={'upload'} width={'15px'} height={'15px'} />
                        <Uploader
                            type={'file'}
                            id={'file'}
                            onChange={isDragDisabled ? ({ target: { value } }: any) => { setFile(value) } : () => {}}
                        />
                        <Text htmlFor={'file'}>Choose File</Text>
                    </Container>
                )
            }
        </Draggable>
    );
};

FileUpload.defaultProps = {
    isDragDisabled: false
};

export default FileUpload;