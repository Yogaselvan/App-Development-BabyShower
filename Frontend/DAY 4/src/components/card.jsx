import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Heading,
  Text,
  Stack,
  ButtonGroup,
  Button,
  ChakraProvider,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  Flex,
  Input,
  useEditableControls,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';

export default function Card1(cardData) {
  const [isEditable, setIsEditable] = useState(false);
  const [cardContents, setCardContents] = useState({
    title: cardData.cardData.title,
    description: cardData.cardData.description,
    price: cardData.cardData.price,
  });
  const navigate = useNavigate();

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleConfirmEdit = () => {
    setIsEditable(false);
    cardData.onEditConfirm(cardContents);
  

    setCardContents({
      title: cardData.cardData.title,
      description: cardData.cardData.description,
      price: cardData.cardData.price,
    });
  };
  

  const handleCancelEdit = () => {
    setIsEditable(false);
  };

  return (
    <ChakraProvider>
      {!isEditable ? (
        <Card maxW='sm'>
          <CardBody>
            <Image src={cardData.cardData.imageSrc} alt='Image' borderRadius='lg' />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{cardContents.title}</Heading>
              <Text>{cardContents.description}</Text>
              <Text color='blue.600' fontSize='2xl'>
                {cardContents.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue' onClick={handleEditClick}>
                Edit
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                View
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ) : (
        <Card maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' m={5}>
          <Image as='img' alt='green iguana' h='140px' src={cardData.imageSrc} />
          <CardBody>
            <Stack spacing={3}>
              <Heading size='md'>
                <Editable
                  value={cardContents.title}
                  onChange={(newTitle) =>
                    setCardContents({ ...cardContents, title: newTitle })
                  }
                >
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Heading>
              <Text>
                <Editable
                  value={cardContents.description}
                  onChange={(newDesc) =>
                    setCardContents({ ...cardContents, description: newDesc })
                  }
                >
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                <Editable
                  value={cardContents.price}
                  onChange={(newPrice) =>
                    setCardContents({ ...cardContents, price: newPrice })
                  }
                >
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button size='sm' onClick={handleConfirmEdit}>
                Confirm
              </Button>
              <Button size='sm' onClick={handleCancelEdit}>
                Cancel
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card> 
      )}
    </ChakraProvider>
  );
}
