import LinkButton from '@/components/ui/buttons/LinkButton'

function MessageToolbar() {
  return (
    <>
      <LinkButton pathname={'/message/create'} label={'Create'} />
    </>
  )
}

export default MessageToolbar
