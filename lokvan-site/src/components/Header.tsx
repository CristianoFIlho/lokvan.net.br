import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'

const Links = [
  { name: 'Home', path: '/' },
  { name: 'Sobre Nós', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Frota', path: '/frota' },
  { name: 'Contato', path: '/contato' },
]

const NavLink = ({ children, to }: { children: React.ReactNode; to: string }) => (
  <Link
    as={RouterLink}
    to={to}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.200',
    }}
    fontSize="md"
    fontWeight="medium"
  >
    {children}
  </Link>
)

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg="white" px={4} shadow="md" position="sticky" top="0" zIndex="1000">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* Logo */}
          <Box fontWeight="bold" fontSize="xl" color="lokvan.primary">
            LOKVAN
          </Box>

          {/* Desktop Navigation */}
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link.name} to={link.path}>
                {link.name}
              </NavLink>
            ))}
          </HStack>

          {/* Desktop Actions */}
          <HStack spacing={2} display={{ base: 'none', md: 'flex' }}>
            <Button
              as={RouterLink}
              to="/orcamento"
              variant="lokvan"
              size="sm"
            >
              Solicitar Orçamento
            </Button>
            <IconButton
              aria-label="WhatsApp"
              icon={<FaWhatsapp />}
              size="sm"
              colorScheme="green"
              variant="ghost"
              onClick={() => window.open('https://wa.me/557196559262', '_blank')}
            />
            <IconButton
              aria-label="Telefone"
              icon={<FaPhone />}
              size="sm"
              colorScheme="blue"
              variant="ghost"
              onClick={() => window.open('tel:+55719996559262', '_blank')}
            />
          </HStack>

          {/* Mobile menu button */}
          <IconButton
            size={'md'}
            icon={<HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={onOpen}
          />
        </Flex>
      </Box>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">
              {Links.map((link) => (
                <Link
                  key={link.name}
                  as={RouterLink}
                  to={link.path}
                  onClick={onClose}
                  fontSize="lg"
                >
                  {link.name}
                </Link>
              ))}
              <Button
                as={RouterLink}
                to="/orcamento"
                variant="lokvan"
                w="full"
                mt={4}
                onClick={onClose}
              >
                Solicitar Orçamento
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header