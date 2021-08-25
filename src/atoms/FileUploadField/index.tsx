import React, { useEffect, useCallback, useState } from 'react';
import { DraggableBox } from '..';
import { uploadIcon } from '../../assets';
import { Container, Icon, Uploader, Text } from './styles';

interface FileUploadFieldProps {
    id: string;
    index: number;
    isDragDisabled?: boolean;
    onDuplicate?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
    getFile: Function;
};

const FileUpload = ({
    id,
    index,
    isDragDisabled = false,
    onDuplicate = () => { },
    onEdit = () => { },
    onDelete = () => { },
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
        <DraggableBox
            id={id}
            index={index}
            isDragDisabled={isDragDisabled}
            onDuplicate={onDuplicate}
            onEdit={onEdit}
            isEditable={false}
            onDelete={onDelete}
        >
            <Container>
                <Icon src={uploadIcon} alt={'upload'} width={'15px'} height={'15px'} />
                <Uploader
                    type={'file'}
                    id={'file'}
                    onChange={isDragDisabled ? ({ target: { value } }: any) => { setFile(value) } : () => { }}
                />
                <Text htmlFor={'file'}>Choose File</Text>
            </Container>
        </DraggableBox>
    );
};

export default FileUpload;