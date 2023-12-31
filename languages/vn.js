   const language = {
    loadevent: "Sự kiện người dùng đã tải.",
    loadcmd: "Lệnh đã tải.",
    ready: "Kết nối thành công.",
    loadslash: "Đã tải lại thành công ứng dụng [/] lệnh.",
    error1: "Mã thông báo bot mà bạn đã nhập vào dự án của mình không chính xác hoặc MỤC ĐÍCH của bot của bạn bị TẮT!",
    error2: "Vui lòng đặt mã thông báo bot trong token.js hoặc trong tệp .env trong dự án của bạn!",
    loadclientevent: "Loaded client event",
    embed1: "Bạn phải đặt vai trò <@&{djRole}>(DJ) trên máy chủ này để sử dụng lệnh này. Người dùng không có vai trò này không thể sử dụng {cmdMAP}",
    message1: "Bạn chưa kết nối với kênh âm thanh. ❌",
    message2: "Bạn không ở cùng kênh âm thanh với tôi. ❌",
    message3: "Tôi bị thiếu quyền",
    msg4: "Đã xảy ra sự cố",
    msg5: "Hiện không có bản nhạc nào đang phát! ❌",
    msg6: "Lưu bài hát",
    msg7: "Viết ra tên danh sách phát.",
    msg8: "Bài hát này đang phát trực tiếp, không có dữ liệu về thời lượng để hiển thị. 🎧",
    msg9: "**✅ Thành công:** Dữ liệu thời gian được cập nhật.",
    msg10: "Bạn chưa có danh sách phát có tên này. ❌",
    msg11: "Bản nhạc này đã có trong danh sách phát. ❌",
    msg12: "đã thêm vào danh sách phát nhạc của bạn.",
   error3: "Lỗi khi tải lại ứng dụng [/] lệnh: ",
   error4: "CẢNH BÁO: Có vẻ như bạn không viết url mongodb? Nếu bạn không nhập url mongodb hợp lệ vào tệp config.js, bạn sẽ không thể sử dụng bot.",
   msg13: `🎵 Đang phát: **{track?.title}** tới Kênh: **{queue?.connection.channel.name}** 🎧`,
   msg14: "Hàng đợi trống. Bạn có thể nghe một số bản nhạc nữa, byebye ... ✅",
   msg15: "Tôi đã ngắt kết nối vì không còn ai trong kênh của tôi. ❌",
   msg16: "Tôi gặp sự cố khi kết nối với kênh thoại. ❌ Giống như ai đó đã ngắt kết nối tôi? I'm very sad. 😔",
   msg17: "Không có bài hát trước đó! ❌",
   msg18: "Hiện đang phát **{queue.previousTracks[1].title}** ✅",
   msg19: " Thống kê bot",
   msg20: "Tải lại",
   msg21: "**Thời gian của bạn đã hết!**",
   msg22: "**✅ Dữ liệu được cập nhật**",
   msg23: "Hàng đợi trống. ❌",
   msg24: "Hàng đợi vừa được xóa 🗑️",
   msg26: "Nếu bạn không chỉ định vai trò DJ, bạn sẽ không thể sử dụng lệnh!",
   msg25: "Vai trò DJ được đặt thành công tới <@&{role}>.",
   msg27: "Vai trò DJ đã được xóa thành công.",
   msg28: "Vai trò DJ chưa được thiết lập.",
   msg29: `Vui lòng nhập tên bộ lọc hợp lệ. ❌\n{filters}`,
   msg30: `Tôi không thể tìm thấy bộ lọc có tên đó. ❌\n{filters}`,
   msg31: `Đã áp dụng: **{filter}**, Trạng thái bộ lọc: **{status}**\n **Hãy nhớ rằng nếu nhạc dài, thời gian áp dụng bộ lọc có thể dài hơn tương ứng.**`,
   msg32: "Đã đến lúc nghe nhạc trên máy chủ discord của bạn với giao diện nâng cao và hoàn toàn miễn phí. Bot âm nhạc hỗ trợ phát nhạc trên nhiều nền tảng. Tạo bot âm nhạc của riêng bạn: https://github.com/TruongNoo/Cei_Music.git",
   msg33: "Lệnh bot",
   msg34: "Bạn đã có một lệnh hoạt động ở đây. ❌",
   msg35: "Danh sách phát",
   msg36: "Bản nhạc đang được nghe",
   msg37: "Tắt lặp nhạc",
   msg38: "Hệ thống bật\tắt lặp nhạc",
   msg39: `> **Làm thế nào về việc đưa ra một sự lựa chọn?**
   > **Danh sách phát:** Lặp lại hàng đợi. 
   > **Bài hát đang phát hiện tại:** Lặp lại bài hát hiện tại. 
   > **Tắt vòng lặp:** Tắt vòng lặp.`,
   msg40: "Chế độ vòng lặp hàng đợi",
   msg41: "Đã xảy ra sự cố. ❌",
   msg42: "Đang phát nhạc ở chế độ vòng lặp",
   msg43: "Chế độ vòng lặp đã không hoạt động. ❌",
   msg44: `Chế độ vòng lặp **Đã tắt** 🔁`,
   msg45: "Hết giờ rồi",
   msg46: "Hệ thống vòng lặp - Đã tắt",
   msg47: 'Lưu vào danh sách phát',
   msg48: "Đã tạm dừng bài hát! ✅",
   msg49: `Message Ping`,
   msg50: `Message Latency`,
   msg51: `API Latency`,
   msg52: `Không có danh sách phát. ❌`,
   msg53: `Bạn không có quyền phát danh sách phát này. ❌`,
   msg54: `Bạn chưa có bài hát nào có tên này. ❌`,
   msg55: `Tôi không thể tham gia kênh thoại của bạn. ❌`,
   msg56: `Đang tải danh sách phát...✅`,
   msg57: `<@{interaction.member.id}>, Đã thêm các bản nhạc **{music_filter.length}** vào hàng đợi. ✅`,
   msg58: `Không có danh sách phát nào có tên này. ❌`,
   msg59: `Viết tên của bản nhạc bạn muốn tìm kiếm. ❌`,
   msg60: `Không có kết quả nào được tìm thấy! ❌`,
   msg61: "Đang tải nhạc... 🎧",
   msg62: "danh sách được đặt tên được thêm vào danh sách phát. ✅",
   msg63: `Danh sách phát nhạc rỗng. ❌`,
   msg64: "Danh sách nhạc máy chủ",
   msg65: "Hiện đang phát",
   msg66: "Được yêu cầu bởi",
   msg67: "Trang",
   msg68: `Bộ xử lý lệnh đã bị hủy. ✅`,
   msg69: `Server Music List - Time Ended!`,
   msg70: `Thời gian của bạn đã hết để sử dụng lệnh này, bạn có thể nhập \`/queue\` để sử dụng lại lệnh.`,
   msg71: `Đã xảy ra sự cố. ❌ Giống như bạn chưa từng dừng bản nhạc.`,
   msg72: "Đã tiếp tục phát nhạc! ✅",
   msg73: `Vui lòng nhập tên bài hát hợp lệ. ❌`,
   msg74: `Không tìm thấy kết quả tìm kiếm! ❌`,
   msg75: "Nhạc đã tìm kiếm",
   msg76: "Chọn một bài hát từ **1** đến **{maxTracks.length}** ⬇️",
   msg77: `Đã hủy tìm kiếm nhạc. ✅`,
   msg78: `Đang tải... 🎧`,
   msg79: "được thêm vào hàng đợi. ✅",
   msg80: `Đã hết thời gian tìm kiếm bài hát ❌`,
   msg81: "Hủy",
   msg82: `Số bạn đã nhập cao hơn số lượng bài hát trong hàng đợi. ❌`,
   msg83: "Bài hát đã bỏ qua ✅",
   msg84: `Bài hát này đang phát trực tiếp, không có dữ liệu về thời lượng để hiển thị. 🎧`,
   msg85: `Âm nhạc đã dừng lại. Hẹn gặp lại bạn lần sau! ✅`,
   msg86: "Cập nhật",
   msg87: `Âm lượng hiện tại: **{queue.volume}** 🔊\n**Để thay đổi âm lượng, từ \'1\' đến \'{maxVol}\' Chọn một số ở giữa và nhập.**`,
   msg88: `Âm lượng bạn muốn thay đổi đã là âm lượng hiện tại ❌`,
   msg89: `**Nhập một số từ \'1\' đến \'{maxVol}\' để thay đổi âm lượng .** ❌`,
   msg90: "Âm lượng đã thay đổi:",
   msg91: `Viết tên của danh sách phát bạn muốn tạo. ❌`,
   msg92: `Danh sách phát có tên này đã tồn tại. ❌`, 
   msg93: `Bạn không thể có nhiều hơn 30 danh sách phát ❌`,
   msg94: "Tạo danh sách phát... 🎧",
   msg95: "Đã tạo danh sách phát! 🎧",
   msg96: `Bạn chưa có danh sách phát có tên này. ❌`,
   msg97: "Đang xóa danh sách phát... 🎧",
   msg98: "Đã xóa danh sách phát! 🎧",
   msg99: `Viết tên của bản nhạc bạn muốn tìm kiếm. ❌`,
   msg100: `Viết tên của danh sách phát mà bạn muốn thêm nhạc vào. ❌`,
   msg101: `Bạn không thể có nhiều hơn {max_music} bản nhạc trong danh sách phát. ❌`,
   msg102: "Đang tải nhạc... 🎧",
   msg103: "Tất cả các bản nhạc được thêm vào danh sách phát của bạn! 🎧",
   msg104: `Bản nhạc này đã có trong danh sách phát. ❌`,
   msg105: "đã thêm vào danh sách phát! 🎧",
   msg106: `Viết tên danh sách phát mà bạn muốn xóa. ❌`,
   msg107: `Bạn chưa có bản nhạc nào có tên này. ❌`,
   msg108: "Đang xóa nhạc... 🎧",
   msg109: "Xóa nhạc thành công! 🎧",
   msg110: "Viết tên của danh sách phát bạn muốn tìm kiếm. ❌",
   msg111: `Bạn không có bản nhạc nào trong danh sách phát này. ❌`,
   msg112: "Danh sách phát công khai hàng đầu",
   msg113: `Thời gian của bạn đã hết để sử dụng lệnh này, bạn có thể nhập \'/playlist top\' để sử dụng lại lệnh.`,
   msg114: `Không có danh sách phát công khai. ❌`,
   msg115: "Những danh sách phát của bạn",
   msg116: `những bài hát`,
   msg117: `Bạn không có danh sách phát nào. ❌`,
   msg118: "Thời gian của bạn đã hết để sử dụng lệnh này, bạn có thể nhập \'/playlist list {name}\' để sử dụng lại lệnh.",
   msg119: "Sử dụng lệnh **/play playlist <list-name>** để nghe các danh sách phát này.\nNhập **/playlist list <list-name>** để xem nhạc trong danh sách.",
   msg120: "Vui lòng chỉ định một kênh văn bản.",
   msg121: "Đã thêm <#{channel}> vào danh sách kênh sử dụng lệnh, giờ đây lệnh bot chỉ có thể được sử dụng trên các kênh trong danh sách.",
   msg122: "Không có dữ liệu đã được đăng ký.",
   msg123: "<#{channel}> đã bị xóa khỏi danh sách kênh sử dụng lệnh.",
   msg124: "Kênh này đã có trong danh sách kênh sử dụng lệnh.",
   msg125: "Kênh này không phải là kênh văn bản",
   msg126: "❌ Đây là danh sách các kênh bạn có thể sử dụng trên máy chủ này: channel_filter}",
   msg127: "Lệnh không được xác định.",
   error7: "Vui lòng thử lại lệnh này sau. Lỗi có thể được báo cáo cho các nhà phát triển bot.",
   msg128: "Bạn làm tôi im lặng trong khi tôi đang hát cho mọi người nghe. Đó là lý do tại sao tôi dừng âm nhạc. Nếu bạn hoàn tác tắt tiếng, tôi sẽ tiếp tục. 😔",
   msg129: "plays",
   msg130: "Hãy viết một số hợp lệ.",
   msg131: "để sử dụng các lệnh trong danh sách, bạn cần bỏ phiếu cho bot.",
   msg132: "Không có bản nhạc nào đã tạm dừng.",
   msg133: "Tôi làm lộn xộn thứ tự trong danh sách phát.",
   msg134: "Cách sử dụng không chính xác. Ví dụ: `5:50` | `1:12:43`",
   msg135: "Đã đặt thành công thời gian phát thành {queue.formatted Current Time}",
   msg136: "Tự động phát hiện đã được bật. Tôi sẽ bật nhạc ngẫu nhiên từ bây giờ.",
   msg137: "Tự động phát nhạc hiện đã tắt.",
   }
   module.exports = language;