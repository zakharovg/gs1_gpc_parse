Public Sub TranslateWorkbook()

Dim atrSheet As Worksheet
Dim brickSheet As Worksheet
Dim translationSheet As Worksheet

Set atrSheet = Worksheets("Attribute Classification Sheet")
Set brickSheet = Worksheets("Brick Classification Sheet")
Set translationSheet = Worksheets("Translation")

Dim dict As New Dictionary

Dim translationRowIndex As Long
Dim key As String
Dim value As String

For translationRowIndex = 1 To translationSheet.UsedRange.Rows.Count
    key = translationSheet.Cells(translationRowIndex, 1)
    value = translationSheet.Cells(translationRowIndex, 2)
    If (key <> "") Then
        dict.Add key, value
    End If
Next translationRowIndex

Call TranslateSheet(atrSheet, dict)

End Sub

Private Sub TranslateSheet(target As Worksheet, ByRef dict As Dictionary)

Dim targetRowIndex As Long
Dim key As String

For targetRowIndex = 2 To target.UsedRange.Rows.CountLarge
    key = target.Cells(targetRowIndex, 1)
    If (dict.Exists(key)) Then
        target.Cells(targetRowIndex, 2) = dict.Item(key)
    End If

    key = target.Cells(targetRowIndex, 3)
    If (dict.Exists(key)) Then
        target.Cells(targetRowIndex, 4) = dict.Item(key)
    End If
    
    key = target.Cells(targetRowIndex, 5)
    If (dict.Exists(key)) Then
        target.Cells(targetRowIndex, 6) = dict.Item(key)
    End If

    key = target.Cells(targetRowIndex, 7)
    If (dict.Exists(key)) Then
        target.Cells(targetRowIndex, 8) = dict.Item(key)
    End If
    
Next targetRowIndex
End Sub


