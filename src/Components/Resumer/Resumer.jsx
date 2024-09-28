import { ActionIcon, Modal, ScrollArea, Tooltip } from '@mantine/core';
import { IconArrowBigDownLineFilled } from '@tabler/icons-react';
import React from 'react';
import { Document, Page } from 'react-pdf';


const Resumer = ({ opened, close }) => {
    return (
        <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="auto" centered className="font-mono" opened={opened} onClose={close}>
            <Modal.Overlay className="!backdrop-opacity-85 blur-sm" />
            <Modal.Content className="!rounded-3xl">
                <Modal.Header className="!bg-bgColor p-4 border-primaryColor border-2 border-b-0 rounded-tl-3xl rounded-tr-3xl">
                    <Modal.Title data-autofocus className="text-4xl text-white flex gap-3 items-center font-bold">
                        Resume
                        {/*<Tooltip label="Download" color="#64FFDA" position="right" offset={5}>
                            <ActionIcon
                                className="text-primaryColor"
                                component="a"
                                href={file}
                                size="lg"
                                download="CV.pdf"
                                variant="outline"
                                color="#64FFDA"
                            >
                                <IconArrowBigDownLineFilled className="w-6 h-6" />
                            </ActionIcon>
                        </Tooltip> */}
                    </Modal.Title>
                    <Modal.CloseButton size="md" iconSize="30px" className="bg-bgColor text-red-500" />
                </Modal.Header>
                <Modal.Body className="bg-bgColor p-4 border-primaryColor border-2 border-t-0 rounded-bl-3xl rounded-br-3xl">
                    <Document file='' className="w-full rounded-2xl overflow-hidden min-w-40 min-h-14">
                        <Page
                            className="w-full min-w-40 min-h-14"
                            pageNumber={1}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                        />
                    </Document>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    );
};

export default Resumer;
