import React from "react"
import { styled } from "@material-ui/core/styles"
import Header from "../Header"
import IconSidebar from "../IconSidebar"
import RightSidebar from "../RightSidebar"
import WorkContainer from "../WorkContainer"
import { IconDictionaryContext } from "../icon-dictionary.js"

const emptyAr = []
const emptyObj = {}

const Container = styled("div")({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  height: "100%",
  overflow: "hidden",
  maxWidth: "100vw",
})
const SidebarsAndContent = styled("div")({
  display: "flex",
  flexGrow: 1,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  maxWidth: "100vw",
})

export default ({
  style = emptyObj,
  iconSidebarItems = emptyAr,
  selectedTools = ["select"],
  headerItems = emptyAr,
  rightSidebarItems = emptyAr,
  onClickHeaderItem,
  onClickIconSidebarItem,
  headerLeftSide = null,
  iconDictionary = emptyObj,
  children,
}) => (
  <IconDictionaryContext.Provider value={iconDictionary}>
    <Container style={style}>
      <Header
        leftSideContent={headerLeftSide}
        onClickItem={onClickHeaderItem}
        items={headerItems}
      />
      <SidebarsAndContent>
        {iconSidebarItems.length === 0 ? null : (
          <IconSidebar
            onClickItem={onClickIconSidebarItem}
            selectedTools={selectedTools}
            items={iconSidebarItems}
          />
        )}
        <WorkContainer>{children}</WorkContainer>
        {rightSidebarItems.length === 0 ? null : (
          <RightSidebar>{rightSidebarItems}</RightSidebar>
        )}
      </SidebarsAndContent>
    </Container>
  </IconDictionaryContext.Provider>
)
