import {
  Collapse,
  Alert,
  VStack,
  HStack,
  Text,
  IconButton,
  Box,
  CloseIcon,
  IAlertProps,
} from "native-base";

const AlertModal = ({
  show,
  setShow,
  alertText,
  status,
  title,
}: {
  show: boolean;
  setShow: (arg: boolean) => void;
  alertText: string;
  status: IAlertProps["status"];
  title: string;
}) => {
  return (
    <Collapse isOpen={show} safeArea>
      <Alert maxW="400" status={status}>
        <VStack space={1} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text
                fontSize="md"
                fontWeight="medium"
                _dark={{
                  color: "coolGray.800",
                }}
              >
                {title}
              </Text>
            </HStack>
            <IconButton
              variant="unstyled"
              _focus={{
                borderWidth: 0,
              }}
              icon={<CloseIcon size="3" />}
              _icon={{
                color: "coolGray.600",
              }}
              onPress={() => setShow(false)}
            />
          </HStack>
          <Box
            pl="6"
            _dark={{
              _text: {
                color: "coolGray.600",
              },
            }}
          >
            {alertText}
          </Box>
        </VStack>
      </Alert>
    </Collapse>
  );
};

export default AlertModal;
