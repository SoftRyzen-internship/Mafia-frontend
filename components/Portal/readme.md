# Name

Portal

# Description

The Portal component lets you render its children into a DOM node that exists
outside of the Portal's own DOM hierarchy.

# Props

setShowModal - function to change state children - the content to be rendered
inside the element.

# Examples

const Example = () => { const [showModal, setShowModal] = useState(false); const
onModalClose = () => setShowModal(false); return ( <> <button onClick={() =>
setShowModal(true)}> Show modal </button> {showModal && (
<Portal onModalClose={onModalClose}> <ModalSendForm onModalClose={onModalClose}>
<ErrorWindow/> </ModalSendForm>  
 </Portal> )} </> ); };
