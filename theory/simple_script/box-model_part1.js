childWidth = 100
childPadding = 10
childBorder = 1
childMargin = 20

parrentWidth = 110

childSize = childWidth + 2*(childPadding + childBorder + childMargin)
overflow = childSize > parrentWidth

overflowSize = childSize - parrentWidth

alert("Horizontal child size: " + childSize + "px")
alert("Child overflow? " + overflow)
alert("Horizontal overflow size: " + overflowSize + "px")