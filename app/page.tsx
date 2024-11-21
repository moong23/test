"use client";

export default function Home() {
  const handleSelectPhotos = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const selectedFiles = Array.from(files);
    if (selectedFiles.length > 10) {
      alert("최대 10개의 이미지만 선택 가능합니다.");
      return;
    }

    console.log("선택된 파일:", selectedFiles);
    // 파일 처리 로직 추가 가능
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "공유하기 제목",
          text: "공유할 내용을 여기에 작성하세요.",
          url: window.location.href, // 현재 페이지 URL을 공유
        });
        console.log("공유 성공");
      } catch (error) {
        console.error("공유 중 오류 발생:", error);
      }
    } else {
      alert("공유하기 기능이 지원되지 않는 브라우저입니다.");
    }
  };

  return (
    <div className="w-full h-full flex items-center flex-row gap-10">
      {/* 앨범에서 사진 선택 버튼 */}
      <label
        className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        htmlFor="photoInput"
      >
        앨범에서 사진 선택
      </label>
      <input
        type="file"
        id="photoInput"
        multiple
        accept="image/*"
        onChange={handleSelectPhotos}
        style={{ display: "none" }}
      />

      {/* 공유하기 버튼 */}
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={handleShare}
      >
        공유하기
      </button>
    </div>
  );
}
