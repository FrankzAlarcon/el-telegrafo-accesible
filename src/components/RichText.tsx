import { type FC, type ReactNode } from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

interface TextProps {
  children: ReactNode
}

const Bold: FC<TextProps> = ({ children }) => <span className="font-bold">{children}</span>

const Text: FC<TextProps> = ({ children }) => <p className='py-1'>{children}</p>

const List: FC<TextProps> = ({ children }) => <ul className='list-disc pl-6'>{children}</ul>

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <Bold>{text}</Bold>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
    [BLOCKS.UL_LIST]: (node: any, children: any) => <List>{children}</List>
  }
}

interface RichTextProps {
  content: any
}

const RichText: FC<RichTextProps> = ({ content }) => {
  return (
    documentToReactComponents(
      content,
      options
    )
  )
}

export default RichText
